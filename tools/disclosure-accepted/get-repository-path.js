import * as core from "@actions/core";
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit.pulls
  .listFiles({
    owner: "418sec",
    repo: "huntr",
    pull_number: 1568, // < EXAMPLE // process.env.PR_NUMBER,
  })
  .then(async (files) => {
    const vulnerabilityJsonPath = files.data.filter(
      (file) => file.filename.split("/").pop() == "vulnerability.json"
    )[0];

    // Get the vulnerability.json contents
    await octokit.repos
      .getContent({
        owner: "418sec",
        repo: "huntr",
        path: vulnerabilityJsonPath.filename,
        ref: "staging",
      })
      .then((response) => {
        const decodedContent = JSON.parse(
          Buffer.from(response.data.content, "base64").toString()
        );
        core.setOutput("repoOwner", decodedContent.Repository.Owner);
        core.setOutput("repoName", decodedContent.Repository.Name);
      });
  })
  .catch((error) => {
    console.log("Error while fetching repository information:", error);
  });
