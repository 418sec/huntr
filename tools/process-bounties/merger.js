const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit.repos
  .merge({
    owner: "418sec",
    repo: "huntr",
    base: "master",
    head: "staging",
  })
  .then(() => {
    console.log("Successfully merged staging into master.");
  })
  .catch((error) => {
    console.log("ERROR merging staging into master:", error);
  });
