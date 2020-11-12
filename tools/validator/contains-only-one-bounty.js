"use strict";

import {dirname} from "path";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Check for many new bounty directories
const diffDirs = [...new Set(diff.map((item) => dirname(item.path)))];
// if (diffDirs.length > 1)
//   core.setFailed("Diff must only contain one bounty directory.");
// else
core.setOutput("bounty_dir", diffDirs[0]);
