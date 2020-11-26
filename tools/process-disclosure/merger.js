import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

octokit.pulls
  .merge({
    owner: "418sec",
    repo: "huntr",
    pull_number: `${process.env.PR_NUMBER}`
  })
  .then(() => {
    console.log(`Successfully merged PR #${process.env.PR_NUMBER} into staging.`);
  })
  .catch((error) => {
    console.log(`Error: Merging PR #${process.env.PR_NUMBER} into staging failed!`, error);
  });
