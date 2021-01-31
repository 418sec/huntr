"use strict";

import { dirname } from "path";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const dirs = [...new Set(diff.map((file) => dirname(file.path)))];
if (dirs.length != 1)
  core.setFailed("The PR does not strictly contain only one directory...");