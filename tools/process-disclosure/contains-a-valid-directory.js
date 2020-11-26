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

// Get required key values
const packageId = vulnerabilityJson.PackageVulnerabilityID
const packageName = vulnerabilityJson.Package.Name
const packageRegistry = vulnerabilityJson.Package.Registry

// Construct valid paths
const vulnerabilityDir = `bounties/${packageRegistry}/${packageName}/${packageId}/vulnerability.json`
const readmeDir = `bounties/${packageRegistry}/${packageName}/${packageId}/README.md`

// Filter paths that do not match
const illegalDir = diff.filter((item) => !(item.path == vulnerabilityDir || item.path == readmeDir));
if (illegalDir.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json value (generic).");

// Check ID & Package.Name matches the directory name
const validId = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/\S+\/${packageId}\/(vulnerability\.json|README\.md)`, 'g');
console.log('validId.test(item.path)', validId.test(item.path));
const illegalId = diff.filter((item) => !validId.test(item.path));
if (illegalId.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `PackageVulnerabilityID` value.");

const validPackageName = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/([1-9]|[1-9])\/(vulnerability\.json|README\.md)`, 'g');
const illegalPackageName = diff.filter((item) => !validPackageName.test(item.path));
if (illegalPackageName.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json `Package.Name` value.");