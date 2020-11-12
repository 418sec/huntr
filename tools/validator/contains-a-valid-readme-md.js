"use strict";

import * as fs from "fs/promises";

import * as core from "@actions/core";

const vulnerabilityReadmePath = `../../${process.env.BOUNTY_DIR}/README.md`;

// Try to read the README.md
const vulnerabilityReadme = await fs
  .readFile(vulnerabilityReadmePath, "utf8")
  .catch(() => {
    core.setFailed(
      `A README.md file does not exist in ${process.env.BOUNTY_DIR}`
    );
  });
