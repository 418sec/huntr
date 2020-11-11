"use strict";
import {promisify} from "util";
import {execFile} from "child_process";
import {dirname} from "path";

const promisifiedExecFile = promisify(execFile);

// Get the git diff
const diffString = await promisifiedExecFile("git", [
  "diff",
  "staging",
  "--name-status",
]);

// Check for errors
if (diffString.stderr)
  throw `Error whilst executing git diff: ${diffString.stderr}`;

// Process git diff's stdout
const diffStringLines = diffString.stdout
  .split(/[\r\n]+/) // Split by newlines
  .filter((e) => e); // This removes empty strings

if (diffStringLines.length === 0) throw "Diff is empty.";

let diff = [];
diffStringLines.forEach((line) => {
  const [change, path] = line.split(/\t/);
  diff.push({
    change: change,
    path: path,
  });
});

console.log("diff:", diff);

// Check for non-bounty files
if (diff.filter((item) => item.path.startsWith("bounties/")))
  throw "Diff must only contain changes to bounty files.";

// Check for many new bounty directories
const diffDirs = [...new Set(diff.map((item) => dirname(item.path)))];
if (diffDirs.length > 1) throw "Diff must only contain one bounty directory.";

// Check for only new bounties (additions)
if (diff.filter((item) => item.change === "M" || "D"))
  throw "Diff must only contain new bounties.";

console.log("Diff is valid");
