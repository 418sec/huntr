"use strict";
import {promisify} from "util";
import {execFile} from "child_process";
import {dirname} from "path";

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
  console.error("Error whilst executing git diff", diffString.stderr);

// Process git diff's stdout
const diffStringLines = diffString.stdout
  .split(/[\r\n]+/) // Split by newlines
  .filter((e) => e); // This removes empty strings

if (diffStringLines.length === 0)
  console.error("Diff is empty.", diffString.stdout);

let diff = [];
diffStringLines.forEach((line) => {
  const [change, path] = line.split(/\t/);
  diff.push({
    change: change,
    path: path,
  });
});

// Check for non-bounty files
if (diff.filter((item) => item.path.startsWith("bounties/")))
  console.error("Diff must only contain changes to bounty files.", diff);

// Check for many new bounty directories
const diffDirs = [...new Set(diff.map((item) => dirname(item.path)))];
if (diffDirs.length > 1)
  console.error("Diff must only contain one bounty directory.", diff);

// Check for only new bounties (additions)
if (diff.filter((item) => item.change === "M" || "D"))
  console.error("Diff must only contain new bounties.", diff);

console.log("Diff is valid.", diff);

return {test: "hello"};
