const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const branchName = `index-package-username`; // TODO: example format, represents unique branch for each submission

// Get the repo's default branch
octokit.repos
  .get({
    owner: "418sec",
    repo: process.env.REPO_NAME,
  })
  .then(async (response) => {
    const defaultBranch = response.data.default_branch;
    // Get the latest sha commit
    await octokit.git
      .getRef({
        owner: "418sec",
        repo: process.env.REPO_NAME,
        ref: `heads/${defaultBranch}`,
      })
      .then(async (response) => {
        // Create the new branch
        await github.git
          .createRef({
            owner: "418sec",
            repo: process.env.REPO_NAME,
            ref: `refs/heads/${branchName}`,
            sha: response.data.object.sha,
          })
          .then(() => {
            console.log("Successfully created branch:", branchName);
          });
      });
  })
  .catch((error) => {
    console.log("Error trying to create branch:", error);
  });
