"use strict";

import * as core from "@actions/core";
import { Octokit } from "@octokit/rest"

const octokit = new Octokit();

console.log("Checking list of files for PR: ", process.env.PR_NUMBER)

const listFiles = await octokit.pulls
    .listFiles({
      owner: "418sec",
      repo: "huntr",
      pull_number: `${process.env.PR_NUMBER}`
    }).then(response => {
      return response.data
    }).catch(() => {
      return false;
    })

// Check for errors
if (!listFiles)
  core.setFailed(`Error whilst executing list files.`);

if (listFiles.length === 0)
  core.setFailed(`Diff is empty.`);

let diff = [];

listFiles.forEach((file) => {
  let change = file.status === "added" ? "A" : 
              file.status === "removed" ? "D" : 
              file.status === "modified" ? "M" : 
              "Error"
  diff.push({
    change: change,
    path: file.filename
  });
});

console.log('diff', diff);

core.setOutput("diff", diff);
