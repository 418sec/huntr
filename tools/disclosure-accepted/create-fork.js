const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit.repos
  .createFork({
    owner: PROCESS.env.repoOwner, // TODO, pass in env
    repo: PROCESS.env.repoName, // TODO, pass in env
    organization: "418sec",
  })
  .then(() => console.log("disclosureAccepted, createFork() successful."))
  .catch((error) =>
    console.log("disclosureAccepted, createFork() ERROR:", error)
  );
