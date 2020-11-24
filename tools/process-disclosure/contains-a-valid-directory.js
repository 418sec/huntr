import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Try to read the vulnerability.json and parse it
const vulnerabilityJsonPath = `../../${process.env.BOUNTY_DIR}/vulnerability.json`;
const vulnerabilityJson = await fs
  .readFile(vulnerabilityJsonPath, "utf8")
  .then(JSON.parse)
  .catch(() => {
    core.setFailed(
      `A vulnerability.json file does not exist in ${process.env.BOUNTY_DIR}`
    );
  });
const packageName = vulnerabilityJson.Package.Name
const packageId = vulnerabilityJson.PackageVulnerabilityID

// TODO: Replace `\w` to include `-` and `@`
// Check ID & Package.Name matches the directory name
const validId = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/\w\/${packageId}\/(vulnerability\.json|README\.md)`, 'g');
const illegalId = diff.filter((item) => !validId.test(item.path));
if (illegalId.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `ID` value.");

const validPackageName = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/[1-9]\/(vulnerability\.json|README\.md)`, 'g');
const illegalPackageName = diff.filter((item) => !validPackageName.test(item.path));
if (illegalPackageName.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `Package.Name` value.");

// GENERIC TEST (REGEX SHOULD WORK)
console.log('Generic regex:', `bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/(vulnerability\.json|README\.md)`);
const validPath = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/(vulnerability\.json|README\.md)`, 'g');
const illegalPath = diff.filter((item) => !validPath.test(item.path));
if (illegalPath.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json values.");
