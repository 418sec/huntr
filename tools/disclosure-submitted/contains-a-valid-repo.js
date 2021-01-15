"use strict";

import * as fs from "fs/promises";
import * as core from "@actions/core";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

const diff = JSON.parse(process.env.DIFF);

const jsonPath = "../../" + diff.filter(file => 
    file.path.includes("vulnerability.json")
)[0].path;

const jsonContents = await fs
    .readFile(jsonPath, "utf-8")
    .then(JSON.parse)
    .catch(() => {
        core.setFailed("The PR does not contain a readable vulnerability.json...");
    });

await octokit.repos.get({
    owner: jsonContents.Repository.Owner,
    repo: jsonContents.Repository.Name,
  })
  .then(() => {
    console.log("Repo found...")
  })
  .catch(() => {
      core.setFailed("The PR does not contain a valid repo owner/name...");
  });