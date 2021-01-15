"use strict";

import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const mdPath = "../../" + diff.filter(file => 
    file.path.includes("README.md")
)[0].path;

await fs
  .readFile(mdPath, "utf8")
  .catch(() => {
    core.setFailed("The PR does not contain a readable README.md...");
  });
