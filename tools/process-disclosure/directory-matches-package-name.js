import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);
const vulnerabilityJsonPath = `../../${process.env.BOUNTY_DIR}/vulnerability.json`;

// Try to read the vulnerability.json and parse it, returning Package.Name value
const packageName = await fs
  .readFile(vulnerabilityJsonPath, "utf8")
  .then(JSON.parse)
  .then(() => Package.Name)
  .catch(() => {
    core.setFailed(
      `A vulnerability.json file does not exist in ${process.env.BOUNTY_DIR}`
    );
  });

// Check Package.Name matches the directory name
const validPath = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/[1-9]\/vulnerability\.json`);
const illegalPaths = diff.filter((item) => !validPath.test(item.path));
if (illegalPaths.length > 0)
    core.setFailed("Bounty path does not match `Package.Name` value.");
