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
  const defaultBranch = await octokit.repos
    .get({
      owner: "418sec",
      repo: repoName,
    })
    .then((response) => {
      const defaultBranchResponse = response.data.default_branch;
      console.log("Default branch found:", defaultBranchResponse);
      return defaultBranchResponse;
    })
    .catch((error) => {
      core.setFailed("Error attempting to find the default branch:", error);
    });

  // Get the latest commit SHA
  const latestSha = await octokit.git
    .getRef({
      owner: "418sec",
      repo: repoName,
      ref: `heads/${defaultBranch}`,
    })
    .then((response) => {
      const latestShaResponse = response.data.object.sha;
      console.log("Latest commit SHA fetched:", latestShaResponse);
      return latestShaResponse;
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
      sha: latestSha,
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
