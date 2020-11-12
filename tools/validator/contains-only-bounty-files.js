"use strict";

// import * as core from "@actions/core";

console.log(process.env.DIFF);

// // Check for non-bounty files
// if (process.env.DIFF.filter((item) => item.path.startsWith("bounties/"))) {
//   core.warning("Diff must only contain changes to bounty files.");
//   core.setFailed("Diff is invalid.");
// }
