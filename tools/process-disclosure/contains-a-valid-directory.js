import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);
const vulnerabilityJsonPath = `../../${process.env.BOUNTY_DIR}/vulnerability.json`;

// Try to read the vulnerability.json and parse it, returning Package.Name value
const vulnerabilityJson = await fs
  .readFile(vulnerabilityJsonPath, "utf8")
  .then(JSON.parse)
  .catch(() => {
    core.setFailed(
      `A vulnerability.json file does not exist in ${process.env.BOUNTY_DIR}`
    );
  });
const packageName = vulnerabilityJson.Package.Name
const packageId = vulnerabilityJson.ID

// Check Package.Name matches the directory name
const validPath = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/vulnerability\.json`);
const illegalPaths = diff.filter((item) => !validPath.test(item.path));
if (illegalPaths.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json values.");
