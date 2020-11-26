import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

// Try to read the vulnerability.json and parse it
const vulnerabilityJsonPath = `../../${process.env.BOUNTY_DIR}/vulnerability.json`;
// const vulnerabilityJson = await fs
const { PackageVulnerabilityID, Package } = await fs
  .readFile(vulnerabilityJsonPath, "utf8")
  .then(JSON.parse)
  .catch(() => {
    core.setFailed(
      `A vulnerability.json file does not exist in ${process.env.BOUNTY_DIR}`
    );
  });
  
// Construct valid paths
const vulnerabilityDir = `bounties/${Package.Registry}/${Package.Name}/${PackageVulnerabilityID}/vulnerability.json`
const readmeDir = `bounties/${Package.Registry}/${Package.Name}/${PackageVulnerabilityID}/README.md`

// Filter paths that do not match vulnerability valuess
const illegalDir = diff.filter((item) => !(item.path == vulnerabilityDir || item.path == readmeDir));
if (illegalDir.length > 0)
    core.setFailed("Bounty path does not match vulnerability.json values.");
