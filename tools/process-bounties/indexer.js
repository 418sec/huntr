'use strict';

const fs = require("fs/promises");
const fsSync = require("fs");

const fdir = require("fdir");

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

const rootIndexFilename = "index.json"
const rootIndexPath = homeDir + rootIndexFilename

const vulnerabilityFilename = "vulnerability.json"

const bounties = new fdir()
    .withBasePath()
    .filter(path => path.includes(vulnerabilityFilename))
    .crawl(bountyDir)

bounties.withPromise().then(async bountyPaths => {
    var bountiesToIndex = []

    // Iterate through the bounties and add them to the index array
    for (const bountyPath of bountyPaths) {
        const bountyDir = bountyPath.split(`/${vulnerabilityFilename}`)[0]

        const bountyDetails = await fs.readFile(bountyPath, 'utf8').then(JSON.parse)
        const vulnerabilityDetails = await fs.readFile(`${bountyDir}/${vulnerabilityFilename}`, 'utf8').then(JSON.parse)
        const liveBounty = fsSync.existsSync(bountyDir + '/bounty.json')

        bountiesToIndex.push({
            "Registry": vulnerabilityDetails.Package.Registry,
            "PackageName": vulnerabilityDetails.Repository.URL.split('/')[4],
            "PackageOwner": vulnerabilityDetails.Repository.URL.split('/')[3],
            "Downloads": vulnerabilityDetails.Package.Downloads,
            "PackageVulnerabilityID": vulnerabilityDetails.PackageVulnerabilityID,
            "CodebasePrimaryLanguage": vulnerabilityDetails.Repository.Codebase[0],
            "VulnerabilityDescription": vulnerabilityDetails.Summary,
            "Severity": vulnerabilityDetails.CVSS.Score,
            "AffectedVersionRange": vulnerabilityDetails.AffectedVersionRange,
            "DisclosureDate": vulnerabilityDetails.DisclosureDate,
            "Bounty": bountyDetails.Bounty,
            "Live": liveBounty
        });
    }

    // Write bounties to the index file
    await fs.writeFile(rootIndexPath, JSON.stringify(bountiesToIndex));
})
