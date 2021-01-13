const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit.repos
  .createFork({
    owner: process.env.REPO_OWNER,
    repo: process.env.REPO_NAME,
    organization: "418sec",
  })
  .then(() =>
    console.log(
      "Fork created successfully:",
      `${process.env.REPO_OWNER}/${process.env.REPO_NAME} > 418sec/${process.env.REPO_NAME}`
    )
  )
  .catch((error) => console.error("Error while creating fork:", error));
