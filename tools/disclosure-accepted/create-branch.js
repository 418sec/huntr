"use strict";
import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.HUNTR_HELPER_PIPELINE_TOKEN,
});

const vulnerabilityJson = JSON.parse(process.env.VULNERABILITY_JSON);
const bountyIndex = vulnerabilityJson.PackageVulnerabilityID;
const repoName = vulnerabilityJson.Repository.Name;
const repoOwner = vulnerabilityJson.Repository.Owner;
const packageRegistry = vulnerabilityJson.Package.Registry;

const branchName = `${bountyIndex}-${packageRegistry}-${repoOwner}/${repoName}`;
console.log("Creating branch:", branchName);

async () => {
  // Get the repo's default branch
  console.log("Fetching the default branch for:", `418sec/${repoName}`);
  const {
    data: { default_branch },
  } = await octokit.repos
    .get({
      owner: "418sec",
      repo: repoName,
    })
    .catch((error) => {
      core.setFailed("Error attempting to find the default branch:", error);
    });

  // Get the latest commit SHA
  const {
    data: {
      object: { sha },
    },
  } = await octokit.git
    .getRef({
      owner: "418sec",
      repo: repoName,
      ref: `heads/${default_branch}`,
    })
    .catch((error) => {
      core.setFailed("Error attempting to fetch the latest commit SHA:", error);
    });

  // Create the new branch
  await octokit.git
    .createRef({
      owner: "418sec",
      repo: repoName,
      ref: `refs/heads/${branchName}`,
      sha: sha,
    })
    .then((response) => {
      console.log(
        `Successfully created branch '${branchName}' on 418sec/${defaultBranch}:`,
        response
      );
    })
    .catch((error) => {
      core.setFailed("Error attempting to create a new branch:", error);
    });
};
