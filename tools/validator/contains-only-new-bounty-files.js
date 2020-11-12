"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Check for only new bounties (additions)
if (diff.filter((item) => item.change !== "A"))
  core.setFailed("Diff must only contain new bounties.");
