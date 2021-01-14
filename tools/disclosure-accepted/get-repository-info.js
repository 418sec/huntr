"use strict";

import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

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
        ref: "staging",
      })
      .then((response) => {
        const vulnerabilityJson = JSON.parse(
          Buffer.from(response.data.content, "base64").toString()
        );
        core.setOutput("repo-owner", vulnerabilityJson.Repository.Owner);
        core.setOutput("repo-name", vulnerabilityJson.Repository.Name);
        core.setOutput("package-name", vulnerabilityJson.Package.Name);
      });
  })
  .catch((error) => {
    console.error("Error while fetching repository information:", error);
  });
