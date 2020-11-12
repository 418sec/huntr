"use strict";

import * as fs from "fs/promises";

import * as core from "@actions/core";

const vulnerabilityReadmePath = `../../${process.env.BOUNTY_DIR}/README.md`;

// Try to read the README.md
const vulnerabilityReadme = await fs
  .readFile(vulnerabilityReadmePath, "utf8")
  .catch((err) => {
    core.error(err);
    core.setFailed(`A README.md does not exist in ${process.env.BOUNTY_DIR}`);
  });
