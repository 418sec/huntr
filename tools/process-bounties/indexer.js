'use strict';

const fs = require("fs/promises");
const fsSync = require("fs");

const fdir = require("fdir");

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

const rootIndexFilename = "index.json"
const rootIndexPath = homeDir + rootIndexFilename

const vulnerabilityFilename = "vulnerability.json"
const bountyFilename = "bounty.json"

const bounties = new fdir()
    .withBasePath()
    .filter(path => path.includes(vulnerabilityFilename))
    .crawl(bountyDir)

bounties.withPromise().then(async bountyPaths => {
    var bountiesToIndex = []

    // Iterate through the bounties and add them to the index array
    for (const bountyPath of bountyPaths) {
        const vulnerabilityJsonDir = bountyPath.split(`/${vulnerabilityFilename}`)[0]

        const vulnerabilityJsonContent = await fs.readFile(bountyPath, 'utf8').then(JSON.parse)
        const vulnerabilityDetails = await fs.readFile(`${vulnerabilityJsonDir}/${vulnerabilityFilename}`, 'utf8').then(JSON.parse)

        const liveBounty = fsSync.existsSync(vulnerabilityJsonDir + '/bounty.json')
        const bountyJsonContent = liveBounty ?
            await fs.readFile(vulnerabilityJsonDir + '/bounty.json', 'utf8').then(JSON.parse) :
            { Bounty: { Credit: parseInt(vulnerabilityDetails.CVSS.Score * 100), Cash: 25 } }

        bountiesToIndex.push({
            "BountyID": `${vulnerabilityDetails.PackageVulnerabilityID}-${vulnerabilityDetails.Package.Registry}-${vulnerabilityDetails.Repository.URL.split('/')[4].replace('.', '-dot-')}`,
            "Registry": vulnerabilityDetails.Package.Registry,
            "PackageName": vulnerabilityDetails.Repository.URL.split('/')[4],
            "PackageOwner": vulnerabilityDetails.Repository.URL.split('/')[3],
            "Downloads": vulnerabilityDetails.Package.Downloads,
            "Forks": vulnerabilityDetails.Repository.Forks,
            "Stars": vulnerabilityDetails.Repository.Stars,
            "PackageVulnerabilityID": vulnerabilityDetails.PackageVulnerabilityID,
            "CodebasePrimaryLanguage": vulnerabilityDetails.Repository.Codebase[0],
            "VulnerabilityDescription": vulnerabilityDetails.Summary,
            "Severity": vulnerabilityDetails.CVSS.Score,
            "AffectedVersionRange": vulnerabilityDetails.AffectedVersionRange,
            "DisclosureDate": vulnerabilityDetails.DisclosureDate,
            "Bounty": bountyJsonContent.Bounty,
            "Live": liveBounty
        });
    }

    // Write bounties to the index file
    await fs.writeFile(rootIndexPath, JSON.stringify(bountiesToIndex));
})
