"use strict";

import * as core from "@actions/core";

// Check for non-bounty files
if (process.env.DIFF.filter((item) => item.path.startsWith("bounties/")))
  core.setFailed("Diff must only contain changes to bounty files.");
