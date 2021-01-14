"use strict";

import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

console.log("Fetching repository information for PR#:", process.env.PR_NUMBER);

octokit.pulls
  .listFiles({
    owner: "418sec",
    repo: "huntr",
    pull_number: process.env.PR_NUMBER,
  })
  .then(async (files) => {
    const vulnerabilityJsonPath = files.data.filter(
      (file) => file.filename.split("/").pop() == "vulnerability.json"
    )[0].filename;

    // Get the vulnerability.json contents
    await octokit.repos
      .getContent({
        owner: "418sec",
        repo: "huntr",
        path: vulnerabilityJsonPath,
        ref: "action/disclosure-accepted", // testing purposes, production: staging
      })
      .then((response) => {
        const vulnerabilityJson = JSON.parse(
          Buffer.from(response.data.content, "base64").toString()
        );
        console.log("vulnerability.json", vulnerabilityJson);
        core.setOutput("vulnerability-json", vulnerabilityJson);
      });
  })
  .catch((error) => {
    console.error("Error while fetching repository information:", error);
    core.setFailed("Could not fetch repository information.");
  });
