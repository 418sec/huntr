import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);
const vulnerabilityJsonPath = `../../${process.env.BOUNTY_DIR}/vulnerability.json`;

// Try to read the vulnerability.json and parse it
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
// `bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/vulnerability\.json`

// Check ID & Package.Name matches the directory name
const validId = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/\S\/${packageId}\/vulnerability\.json`);
const illegalId = diff.filter((item) => !validId.test(item.path));
if (illegalId.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `ID` value.");

const validPackageName = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/[1-9]\/vulnerability\.json`);
const illegalPackageName = diff.filter((item) => !validPackageName.test(item.path));
if (illegalPackageName.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `Package.Name` value.");
