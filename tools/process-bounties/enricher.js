'use strict';

const fs = require("fs/promises");

const fdir = require("fdir");
const Mustache = require('mustache')
const { Octokit } = require('@octokit/rest')

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const bounties = new fdir()
    .withBasePath()
    .filter(path => path.includes("bounty.json"))
    .crawl(bountyDir)

bounties.withPromise().then(async bountyPaths => {
    const githubIssueCommentBodyTemplate = await fs.readFile('./assets/templates/github-issue-comment-body.mustache', 'utf8')
    const githubIssueTitleTemplate = await fs.readFile('./assets/templates/github-issue-title.mustache', 'utf8')
    const githubIssueBodyTemplate = await fs.readFile('./assets/templates/github-issue-body.mustache', 'utf8')

    // Iterate through each bounty, and enrich, if appropriate
    for (const bountyPath of bountyPaths) {
        const bountyDetails = await fs.readFile(bountyPath, 'utf8').then(JSON.parse)

        // If no ForkURL is present, presume enrichment is required
        if (bountyDetails.ForkURL.length == 0) {
            console.log('Enriching bounty:', bountyPath)

            const bountyDir = bountyPath.split("/bounty.json")[0];
            const vulnerabilityDescription = await fs.readFile(`${bountyDir}/README.md`, 'utf8')
            const vulnerabilityDetails = await fs.readFile(`${bountyDir}/vulnerability.json`, 'utf8').then(JSON.parse)

            // Let's work out the root repositry. Format: https://github.com/:owner/:repo
            const repositoryUrlParts = vulnerabilityDetails.Repository.URL.split('/')
            const repositoryOwner = repositoryUrlParts[3]
            const reposioryName = repositoryUrlParts[4]

            // Check if there are existing GitHub Issue's in the metadata
            const githubIssueUrls = vulnerabilityDetails.References.filter(reference => reference.Description?.equalsIgnoreCase?.("GitHub Issue"))

            if (githubIssueUrls?.length > 0) {
                // Bounty has a GitHub Issue
                for (const githubIssueUrl of githubIssueUrls) {
                    // Format: https://github.com/:owner/:repo/issues/:number
                    const githubIssueUrlParts = githubIssueUrl.split('/')
                    const githubIssueOwner = githubIssueUrlParts[3]
                    const githubIssueRepo = githubIssueUrlParts[4]
                    const githubIssueNumber = githubIssueUrlParts[6]

                    console.log('Adding a comment to issue:', `https://github.com/${githubIssueOwner}/${githubIssueRepo}/${githubIssueNumber}`)

                    const githubIssueCommentBody = githubIssueCommentBodyTemplate
                    console.log('Issue Comment body:', githubIssueCommentBody)

                    //Add a comment to the issue
                    if (process.env.GITHUB_TOKEN && false)
                        octokit.issues.createComment({
                            owner: githubIssueOwner,
                            repo: githubIssueRepo,
                            issue_number: githubIssueNumber,
                            body: githubIssueCommentBody
                        })
                }
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
                if (process.env.GITHUB_TOKEN && false) {
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
            if (process.env.GITHUB_TOKEN && false) {
                const forkCreated = octokit.repos.createFork({
                    owner: repositoryOwner,
                    repo: reposioryName,
                    organization: '418sec'
                })

                // Add fork url to the bounty.json
            }
        }
    }
})