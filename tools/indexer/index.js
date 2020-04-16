'use strict';


const fs = require("fs");
const { promisify } = require("util");

const fdir = require("fdir");

const homeDir = "../../"

const rootIndexFilename = "index.json"
const rootIndexPath = homeDir + rootIndexFilename

const vulnerabilityDir = homeDir + "vulnerabilities"
const vulnerabilityFilename = "vulnerability.json"

const writeFileAsync = promisify(fs.writeFile)

// Find all open bounties
fdir.async(vulnerabilityDir, {
        searchFn: path => path.includes("bounty.json")
    })
    .then(async bountyPaths => {
        var bounties = [];

        // Iterate through the bounties and add them to the index array
        bountyPaths.forEach(bountyPath => {
            const vulnerabilityDir = bountyPath.split("bounty.json")[0];
        
            const vulnerability = require(vulnerabilityDir + vulnerabilityFilename);
            const bounty = require(bountyPath);
            
            bounties.push({
                "Registry": vulnerability.Package.Registry,
                "PackageName": vulnerability.Package.Name,
                "PackageVulnerabilityID": vulnerability.PackageVulnerabilityID,
                "CodebasePrimaryLanguage": vulnerability.Repository.Codebase[0],
                "VulnerabilityDescription": vulnerability.CWE.Description,
                "Severity": vulnerability.CVSS.Score,
                "AffectedVersionRange": vulnerability.AffectedVersionRange,
                "DisclosureDate": vulnerability.DisclosureDate,
                "Bounty": bounty.Bounty
            });
        })
        
        // Write bounties to the index file
        await writeFileAsync(rootIndexPath, JSON.stringify(bounties));
    })
