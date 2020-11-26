import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Construct valid paths
const vulnerabilityDir = `${process.env.BOUNTY_DIR}/vulnerability.json`
const readmeDir = `${process.env.BOUNTY_DIR}/README.md`

// Filter paths that do not match vulnerability valuess
const illegalDir = diff.filter((item) => !(item.path == vulnerabilityDir || item.path == readmeDir));
if (illegalDir.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json values.");