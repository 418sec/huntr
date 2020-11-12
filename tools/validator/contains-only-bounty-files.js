"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Check for non-bounty files
if (diff.filter((item) => !item.path.startsWith("bounties/")))
  core.setFailed("Diff must only contain bounty files.");
