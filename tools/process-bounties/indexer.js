"use strict";

const fs = require("fs/promises");
const fdir = require("fdir");

const homeDir = "../../";
const bountyDir = homeDir + "bounties";

const rootIndexFilename = "index.json";
const rootIndexPath = homeDir + rootIndexFilename;

const vulnerabilityFilename = "vulnerability.json";

const bounties = new fdir()
  .withBasePath()
  .filter((path) => path.includes(vulnerabilityFilename))
  .crawl(bountyDir);

bounties.withPromise().then(async (bountyPaths) => {
  var bountiesToIndex = [];

  // Iterate through the bounties and add them to the index array
  for (const bountyPath of bountyPaths) {
    const vulnerabilityJsonDir = bountyPath.split(
      `/${vulnerabilityFilename}`
    )[0];

    const vulnerabilityDetails = await fs
      .readFile(`${vulnerabilityJsonDir}/${vulnerabilityFilename}`, "utf8")
      .then(JSON.parse);

    bountiesToIndex.push({
      ID: `${vulnerabilityDetails.PackageVulnerabilityID}-${
        vulnerabilityDetails.Package.Registry
      }-${encodeURIComponent(vulnerabilityDetails.Package.Name)}`,
      Registry: vulnerabilityDetails.Package.Registry,
      PackageName: vulnerabilityDetails.Package.Name,
      PackageOwner: vulnerabilityDetails.Repository.URL.split("/")[3],
      Downloads: vulnerabilityDetails.Package.Downloads,
      Forks: vulnerabilityDetails.Repository.Forks,
      Stars: vulnerabilityDetails.Repository.Stars,
      PackageVulnerabilityID: vulnerabilityDetails.PackageVulnerabilityID,
      CodebasePrimaryLanguage: vulnerabilityDetails.Repository.Codebase[0],
      VulnerabilityDescription: vulnerabilityDetails.Summary,
      Severity: vulnerabilityDetails.CVSS.Score,
      AffectedVersionRange: vulnerabilityDetails.AffectedVersionRange,
      DisclosureDate: vulnerabilityDetails.DisclosureDate,
      PrNumber: vulnerabilityDetails.PrNumber,
      Live: vulnerabilityDetails.Contributor.Fixer === "" || !vulnerabilityDetails.Contributor.Fixer === "n/a",
      Bounty: {
        Credit: `${vulnerabilityDetails.CVSS.Score * 100}`,
        Cash: "25"
      }
    });
  }

  // Write bounties to the index file
  await fs.writeFile(rootIndexPath, JSON.stringify(bountiesToIndex));
});
