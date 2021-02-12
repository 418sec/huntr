"use strict";
import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.HUNTR_HELPER_PIPELINE_TOKEN,
});

const vulnerabilityJson = JSON.parse(process.env.VULNERABILITY_JSON);
const repoOwner = vulnerabilityJson.Repository.Owner;
const repoName = vulnerabilityJson.Repository.Name;

console.log(
  "Forking repository:",
  `${repoOwner}/${repoName} > 418sec/${repoName}`
);

await octokit.repos
  .createFork({
    owner: repoOwner,
    repo: repoName,
    organization: "418sec",
  })
  .then((response) => {
    const forkName = response.data.name;
    console.log(
      "Fork created successfully",
      `${repoOwner}/${repoName} > 418sec/${forkName}`
    );
    core.setOutput("fork-name", forkName);
  })
  .catch((error) => {
    core.setFailed(`Error while creating fork: ${error}`);
  });
