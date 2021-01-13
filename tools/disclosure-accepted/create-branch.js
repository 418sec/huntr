const branchName = `index-package-username`; // example format
github.git.createRef({
  owner: "418sec",
  repo: process.env.REPO_NAME,
  ref: `refs/heads/${branchName}`,
  sha: "", // TODO: Get latest sha from default branch @ 418sec/REPO_NAME
});
