"use strict";

import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const illegalChanges = diff.filter(file => file.change != "A");

if(illegalChanges.length > 0) {
    core.setFailed("The PR does not strictly contain only new files...");
}