"use strict";

const fs = require("fs/promises");
const fdir = require("fdir");
const Mustache = require("mustache");

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const homeDir = "../../";
const bountyDir = homeDir + "bounties";
const bounties = new fdir()
  .withBasePath()
  .filter((path) => path.includes("vulnerability.json"))
  .crawl(bountyDir);

bounties.withPromise().then(async (bountyPaths) => {
  // Iterate through each bounty, and enrich, if appropriate
  for (const bountyPath of bountyPaths) {
    let bountyDetails = await fs.readFile(bountyPath, "utf8").then(JSON.parse);

    const bountyDir = bountyPath.split("/vulnerability.json")[0];
    const vulnerabilityDescription = await fs.readFile(
      `${bountyDir}/README.md`,
      "utf8"
    );
    const vulnerabilityDetailsPath = `${bountyDir}/vulnerability.json`;
    let vulnerabilityDetails = await fs
      .readFile(vulnerabilityDetailsPath, "utf8")
      .then(JSON.parse);

    const repositoryOwner = vulnerabilityDetails.Repository.Owner;
    const repositoryName = vulnerabilityDetails.Repository.Name;

    const githubIssueCommentBodyTemplate = await fs.readFile(
      "./assets/templates/github-issue-comment-body.mustache",
      "utf8"
    );
    const githubIssueTitleTemplate = await fs.readFile(
      "./assets/templates/github-issue-title.mustache",
      "utf8"
    );
    const githubIssueBodyTemplate = await fs.readFile(
      "./assets/templates/github-issue-body.mustache",
      "utf8"
    );

    // Check if there are existing GitHub Issue's in the metadata
    const githubIssueReferences = vulnerabilityDetails.References.filter(
      (reference) =>
        reference.Description?.toUpperCase() === "GitHub Issue".toUpperCase()
    );

    if (githubIssueReferences?.length > 0) {
      // Bounty has a GitHub Issue
      for (const githubIssueReference of githubIssueReferences) {
        // Format: https://github.com/:owner/:repo/issues/:number
        const githubIssueUrlParts = githubIssueReference?.URL.split("/");
        const githubIssueOwner = githubIssueUrlParts[3];
        const githubIssueRepo = githubIssueUrlParts[4];
        const githubIssueNumber = githubIssueUrlParts[6];

        console.log(
          "Adding a comment to issue:",
          `https://github.com/${githubIssueOwner}/${githubIssueRepo}/issues/${githubIssueNumber}`
        );

        const githubIssueCommentBody = githubIssueCommentBodyTemplate;
        //console.log('Issue Comment body:', githubIssueCommentBody)

        //Add a comment to the issue
        if (process.env.GITHUB_TOKEN)
          await octokit.issues
            .createComment({
              owner: githubIssueOwner,
              repo: githubIssueRepo,
              issue_number: githubIssueNumber,
              body: githubIssueCommentBody,
            })
            .then((response) => {
              console.log(
                "GitHub Issue Comment created:",
                response.data.html_url
              );
            })
            .catch((err) => {
              console.log("Error creating issue comment:", err);
            });
      }
    }

    console.log(
      "Creating a fork of:",
      `https://github.com/${repositoryOwner}/${repositoryName}`
    );

    // Try to create fork
    if (process.env.GITHUB_TOKEN)
      await octokit.repos
        .createFork({
          owner: repositoryOwner,
          repo: repositoryName,
          organization: "418sec",
        })
        .then(async (response) => {
          console.log(
            "418sec fork created with URL: ",
            response.data.html_url
          );
          // Need to commit this back?
        })
        .catch((err) => {
          console.log("Error creating fork:", err);
        });
  }
});
