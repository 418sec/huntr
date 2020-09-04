'use strict';
const { fdir } = require("fdir");
const fs = require("fs-extra")

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

const vulnerabilities = new fdir()
    .withBasePath()
    .filter(path => path.includes("vulnerability.json"))
    .crawl(bountyDir)


    vulnerabilities.withPromise().then(async vulnerabilityPaths => {
    // Iterate through each bounty, and enrich, if appropriate
    for (const vulnerabilityPath of vulnerabilityPaths) {
        let vulnerabilityDetails = await fs.readFile(vulnerabilityPath, 'utf8').then(JSON.parse)
        if (vulnerabilityDetails.Package.Registry == "packagist")
            continue;

        const newPath = `${bountyDir}/${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}/${vulnerabilityDetails.PackageVulnerabilityID}`
        if(vulnerabilityPath != `${newPath}/vulnerability.json`){
            console.log(`Renaming from ${vulnerabilityPath.split('/vulnerability.json')[0]} to ${newPath}`)
            await fs.mkdir(newPath, { recursive: true })
            await fs.move(vulnerabilityPath.split('/vulnerability.json')[0], newPath, {overwrite: true})
            await fs.rmdir(vulnerabilityPath.split(`/${vulnerabilityDetails.PackageVulnerabilityID}/vulnerability.json`)[0])
        }
     }
})