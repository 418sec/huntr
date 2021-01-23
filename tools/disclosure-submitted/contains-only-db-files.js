"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

if(diff.length !== 2) {
  core.setFailed("The PR should only contain two DB files...");
}

const illegalPaths = diff.filter((file) => !file.path.startsWith("bounties/"));
if (illegalPaths.length > 0)
  core.setFailed("The PR does not strictly contain only database files...");
