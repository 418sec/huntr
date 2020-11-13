"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Check for only new bounties (additions)
const illegalChanges = diff.filter((item) => item.change != "A");
if (illegalChanges.length > 0)
  core.setFailed("Diff must only contain new bounties.");
