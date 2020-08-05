'use strict'

const fs = require("fs/promises")
const fdir = require("fdir")
const Mustache = require('mustache')

const { Octokit } = require('@octokit/rest')
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const homeDir = "../../"
const bountyDir = homeDir + "bounties"
const bounties = new fdir()
    .withBasePath()
    .filter(path => path.includes("bounty.json"))
    .crawl(bountyDir)

bounties.withPromise().then(async bountyPaths => {
    // Iterate through each bounty, and enrich, if appropriate
    for (const bountyPath of bountyPaths) {
        console.log('Creating Issue & Fork for bounty:', bountyPath)
        let bountyDetails = await fs.readFile(bountyPath, 'utf8').then(JSON.parse)

        // If no ForkURL is present, presume Issue & Fork is required
        if (bountyDetails.ForkURL.length == 0) {
            const bountyDir = bountyPath.split("/bounty.json")[0]
            // const vulnerabilityDescription = await fs.readFile(`${bountyDir}/README.md`, 'utf8')
            const vulnerabilityDetailsPath = `${bountyDir}/vulnerability.json`
            let vulnerabilityDetails = await fs.readFile(vulnerabilityDetailsPath, 'utf8').then(JSON.parse)

            // Let's work out the root repositry. Format: https://github.com/:owner/:repo
            const repositoryUrlParts = vulnerabilityDetails.Repository.URL.split('/')
            const repositoryOwner = repositoryUrlParts[3]
            const repositoryName = repositoryUrlParts[4]

            // const githubIssueCommentBodyTemplate = await fs.readFile('./assets/templates/github-issue-comment-body.mustache', 'utf8')
            // const githubIssueTitleTemplate = await fs.readFile('./assets/templates/github-issue-title.mustache', 'utf8')
            // const githubIssueBodyTemplate = await fs.readFile('./assets/templates/github-issue-body.mustache', 'utf8')

            // // Check if there are existing GitHub Issue's in the metadata
            // const githubIssueReferences = vulnerabilityDetails.References.filter(reference => reference.Description?.toUpperCase() === ("GitHub Issue").toUpperCase())

            // if (githubIssueReferences?.length > 0) {
            //     // Bounty has a GitHub Issue
            //     for (const githubIssueReference of githubIssueReferences) {
            //         // Format: https://github.com/:owner/:repo/issues/:number
            //         const githubIssueUrlParts = githubIssueReference?.URL.split('/')
            //         const githubIssueOwner = githubIssueUrlParts[3]
            //         const githubIssueRepo = githubIssueUrlParts[4]
            //         const githubIssueNumber = githubIssueUrlParts[6]

            //         console.log('Adding a comment to issue:', `https://github.com/${githubIssueOwner}/${githubIssueRepo}/issues/${githubIssueNumber}`)

            //         const githubIssueCommentBody = githubIssueCommentBodyTemplate
            //         //console.log('Issue Comment body:', githubIssueCommentBody)

            //         //Add a comment to the issue
            //         if (process.env.GITHUB_TOKEN)
            //             await octokit.issues.createComment({
            //                 owner: githubIssueOwner,
            //                 repo: githubIssueRepo,
            //                 issue_number: githubIssueNumber,
            //                 body: githubIssueCommentBody
            //             })
            //                 .then(response => {
            //                     console.log('GitHub Issue Comment created:', response.data.html_url)
            //                 })
            //                 .catch(err => {
            //                     console.log('Error creating issue comment:', err)
            //                 })
            //     }
            // } else {
            //     // Bounty does not have a GitHub Issue
            //     console.log('Creating a new issue for:', `https://github.com/${repositoryOwner}/${repositoryName}`)

            //     const githubIssueTitle = Mustache.render(githubIssueTitleTemplate, {
            //         vulnerabilitySummary: vulnerabilityDetails.Summary
            //     })
            //     //console.log('Issue Title:', githubIssueTitle)

            //     const githubIssueBody = Mustache.render(githubIssueBodyTemplate, {
            //         username: vulnerabilityDetails.Author.Username,
            //         vulnerabilityDescription,
            //     })
            //     //console.log('Issue Body:', githubIssueBody)

            //     // Create an issue
            //     if (process.env.GITHUB_TOKEN)
            //         await octokit.issues.create({
            //             owner: repositoryOwner,
            //             repo: repositoryName,
            //             title: githubIssueTitle,
            //             body: githubIssueBody
            //         })
            //             .then(async response => {
            //                 // Add issue url to the vulnerability.json
            //                 vulnerabilityDetails.References.push({
            //                     "Description": "GitHub Issue",
            //                     "URL": response.data.html_url
            //                 })
            //                 await fs.writeFile(vulnerabilityDetailsPath, JSON.stringify(vulnerabilityDetails, null, 4))
            //                 console.log('GitHub Issue added to vulnerability details:', response.data.html_url)
            //                 // Need to commit the code back?
            //             })
            //             .catch(err => {
            //                 console.log('Error creating issue:', err)
            //             })
            // }
            console.log('Creating a fork of:', `https://github.com/${repositoryOwner}/${repositoryName}`)

            // Try to create fork
            if (process.env.GITHUB_TOKEN)
                await octokit.repos.createFork({
                    owner: repositoryOwner,
                    repo: repositoryName,
                    organization: '418sec'
                })
                    .then(async response => {
                        // Add fork url to the bounty.json
                        bountyDetails.ForkURL = response.data.html_url
                        await fs.writeFile(bountyPath, JSON.stringify(bountyDetails, null, 4))
                        console.log('ForkURL added to bounty details:', response.data.html_url)
                        // Need to commit this back?
                    })
                    .catch(err => {
                        console.log('Error creating fork:', err)
                    })
        }
    }
})
