"use strict";
import {promisify} from "util";
import {execFile} from "child_process";

import * as core from "@actions/core";

const promisifiedExecFile = promisify(execFile);

// Get the git diff
const diffString = await promisifiedExecFile("git", [
  "diff",
  "--name-status",
  process.env.BASE_COMMIT_SHA,
  process.env.HEAD_COMMIT_SHA,
  "--",
]);

// Check for errors
if (diffString.stderr)
  core.setFailed(`Error whilst executing git diff: ${diffString.stderr}`);

// Process git diff's stdout
const diffStringLines = diffString.stdout
  .split(/[\r\n]+/) // Split by newlines
  .filter((e) => e); // This removes empty strings

if (diffStringLines.length === 0)
  core.setFailed(`Diff is empty: ${diffString.stdout}`);

let diff = [];
diffStringLines.forEach((line) => {
  const [change, path] = line.split(/\t/);
  diff.push({
    change: change,
    path: path,
  });
});

console.log('diff', diff);

core.setOutput("diff", diff);
