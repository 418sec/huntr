'use strict';

const fs = require("fs");
const { promisify } = require("util");

const dataToImport = require('./data.json');

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

// This roughly converts the language to a registry. Vulnerabilities will need to be reviewed before publishing
function convertLanguageToRegistry(language) {
    switch (language.toLowerCase()) {
        case "javascript":
            return "npm"
        case "ruby":
            return "rubygems";
        case "python":
            return "pypi";
        case "java":
            return "maven";
        case "php":
            return "other"; // Current php vulnerabilities do not effect packages within registries
        default:
            return "unknown";
    }
}

dataToImport.data.listBounties.forEach(async oldBounty => {
    const registry = convertLanguageToRegistry(oldBounty.RepositoryLanguage);
    const packageName = oldBounty.PackageName.toLowerCase();
    const packageVulnerabilityID = "1"; // Hardcoded because we don't currently have multiple vulnerabilities against a single package
    const thisBountyDir = `${bountyDir}/${registry}/${packageName}/${packageVulnerabilityID}/`;

    // Create required directories for this vulnerability
    await mkdirAsync(thisBountyDir, { recursive: true });

    // Prepare the description file and save it
    const description = unescape(oldBounty.VulnerabilityDetail);
    await writeFileAsync(thisBountyDir + 'README.md', description);
    console.log("Successfully wrote", thisBountyDir + 'README.md');

    // Prepare the vulnerability file and save it
    const vulnerability = {
        "PackageVulnerabilityID": "1",
        "DisclosureDate": oldBounty.DatePublished,
        "AffectedVersionRange": "*",
        "Summary": oldBounty.VulnerabilityType,
        "Contributor": {
            "Discloser": "",
            "Author": ""
        },
        "Package": {
            "Registry": convertLanguageToRegistry(oldBounty.RepositoryLanguage),
            "Name": oldBounty.PackageName.toLowerCase(),
            "URL": ""
        },
        "CWEs": [{
            "ID": "",
            "Description": ""
        }],
        "CVSS": {
            "Version": "3.1", // Standard version that was used for Score creation
            "AV": "",
            "AC": "",
            "PR": "",
            "UI": "",
            "S": "",
            "C": "",
            "I": "",
            "A": "",
            "E": "",
            "RL": "",
            "RC": "",
            "Score": `${oldBounty.VulnerabilityCVSS}`
        },
        "CVEs": [
            ""
        ],
        "Repository": {
            "URL": oldBounty.RootRepositoryUrl,
            "Codebase": [
                oldBounty.RepositoryLanguage
            ]
        },
        "Permalinks": [
            ""
        ],
        "References": [
            {
                "Description": "",
                "URL": ""
            }
        ]
    }
    await writeFileAsync(thisBountyDir + 'vulnerability.json', JSON.stringify(vulnerability, null, 4));
    console.log("Successfully wrote", thisBountyDir + 'vulnerability.json');

    // Prepare the bounty file and save it
    const bounty = {
        "ForkURL": oldBounty.ForkSourceUrl,
        "Bounty": {
            "Credit": oldBounty.CreditReward,
            "Cash": oldBounty.CashReward
        }
    };
    await writeFileAsync(thisBountyDir + 'bounty.json', JSON.stringify(bounty, null, 4));
    console.log("Successfully wrote", thisBountyDir + 'bounty.json');
})
