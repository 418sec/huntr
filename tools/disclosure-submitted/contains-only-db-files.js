"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const illegalPaths = diff.filter((file) => !file.path.startsWith("bounties/"));
if (illegalPaths.length > 0)
  core.setFailed("The PR does not strictly contain only database files...");
