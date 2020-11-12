"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Check for non-bounty files
const illegalPaths = diff.filter((item) => !item.path.startsWith("bounties/"));
if (illegalPaths.length > 0)
  core.setFailed("Diff must only contain bounty files.");
