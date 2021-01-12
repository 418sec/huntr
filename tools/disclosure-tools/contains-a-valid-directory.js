import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const jsonPath = "../../" + diff.filter(file => 
    file.path.includes("vulnerability.json")
)[0].path;

const { PackageVulnerabilityID, Package } = await fs
  .readFile(jsonPath, "utf8")
  .then(JSON.parse)
  .catch(() => {
    core.setFailed("A vulnerability.json could not be read...");
  });

const jsonDir = `bounties/${Package.Registry}/${Package.Name}/${PackageVulnerabilityID}/vulnerability.json`
const mdDir = `bounties/${Package.Registry}/${Package.Name}/${PackageVulnerabilityID}/README.md`

const illegalDir = diff.filter((file) => !(file.path == jsonDir || file.path == mdDir));
if (illegalDir.length > 0)
    core.setFailed("The PR does not strictly contain a valid directory...");

core.setOutput("package-name", Package.Name)