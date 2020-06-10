'use strict';
const fs = require('fs')
const { Octokit } = require('@octokit/rest')
const Mustache = require('mustache')

const githubIssueCommentBodyTemplate = fs.readFileSync('./github-issue-comment-body.mustache', 'utf8')
const githubIssueTitleTemplate = fs.readFileSync('./github-issue-title.mustache', 'utf8')
const githubIssueBodyTemplate = fs.readFileSync('./github-issue-body.mustache', 'utf8')

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

// Determine all new bounties added via git diff
const exec = require('child_process').exec
exec('git diff HEAD^ HEAD  --diff-filter=A --stat --name-only | grep \'bounty.json\'', (error, stdout, stderr) => {
    if(error || stderr)
        return
    
    // Convert stdout to array
    const newBounties = stdout.split(/\r?\n/).filter(newBounty => newBounty) // The .filter here removes empty items (whitspace leftover from the .split)

    // For each new bounty
    newBounties.forEach(bountyFilePath => {
        const bountyDir = bountyFilePath.split('/bounty.json')[0]
        console.log('Enriching bounty found in:', bountyDir)

        const vulnerabilityDescription = fs.readFileSync(`../../${bountyDir}/README.md`, 'utf8')
        const vulnerabilityDetails = JSON.parse(fs.readFileSync(`../../${bountyDir}/vulnerability.json`, 'utf8'))

        // Let's work out the root repositry. Format: https://github.com/:owner/:repo
        const repositoryUrlParts = vulnerabilityDetails.Repository.URL.split('/')
        const repositoryOwner = repositoryUrlParts[3]
        const reposioryName = repositoryUrlParts[4]

        // Check if there are existing GitHub Issue's in the metadata
        const githubIssueUrls = vulnerabilityDetails.References.filter(reference => reference.Description?.equalsIgnoreCase?.("GitHub Issue"))
        
        if(githubIssueUrls && githubIssueUrls.length > 0){
            // Bounty has a GitHub Issue
            githubIssueUrls.forEach(githubIssueUrl => {
                // Format: https://github.com/:owner/:repo/issues/:number
                const githubIssueUrlParts = githubIssueUrl.split('/')
                const githubIssueOwner = githubIssueUrlParts[3]
                const githubIssueRepo = githubIssueUrlParts[4]
                const githubIssueNumber = githubIssueUrlParts[6]

                console.log('Adding a comment to issue:', `https://github.com/${githubIssueOwner}/${githubIssueRepo}/${githubIssueNumber}`)

                const githubIssueCommentBody = githubIssueCommentBodyTemplate
                console.log('Issue Comment body:', githubIssueCommentBody)

                //Add a comment to the issue
                if(process.env.GITHUB_TOKEN && false)
                    octokit.issues.createComment({
                        owner: githubIssueOwner,
                        repo: githubIssueRepo,
                        issue_number: githubIssueNumber,
                        body: githubIssueCommentBody
                    })
            })
        } else {
            // Bounty does not have a GitHub Issue
            console.log('Creating a new issue for:', `https://github.com/${repositoryOwner}/${reposioryName}`)

            const githubIssueTitle = Mustache.render(githubIssueTitleTemplate, {
                vulnerabilitySummary: vulnerabilityDetails.Summary
            })
            console.log('Issue Title:', githubIssueTitle)
            
            const githubIssueBody = Mustache.render(githubIssueBodyTemplate, { 
                username: vulnerabilityDetails.Author.Username, 
                vulnerabilityDescription, 
            })
            console.log('Issue Body:', githubIssueBody)

            // Create an issue
            if(process.env.GITHUB_TOKEN && false) {
                const issueCreated = octokit.issues.create({
                    owner: repositoryOwner,
                    repo: reposioryName,
                    title: githubIssueTitle,
                    body: githubIssueBody
                })
            
                // Add issue url to the vulnerability.json
            }
        }
        console.log('Creating a fork of:', `https://github.com/${repositoryOwner}/${reposioryName}`)
        
        // Try to create fork
        if(process.env.GITHUB_TOKEN && false){
            const forkCreated = octokit.repos.createFork({
                owner: repositoryOwner,
                repo: reposioryName,
                organization: '418sec'
            })
        
            // Add fork url to the bounty.json
        }  
    })
})