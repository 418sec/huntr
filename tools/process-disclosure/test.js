import * as fs from "fs";

const diff =
    [
        {"change":"A","path":"bounties/maven/argonaut/1/README.md"},
        {"change":"A","path":"bounties/maven/argonaut/1/vulnerability.json"}
    ]

// Try to read the vulnerability.json and parse it
const vulnerabilityJsonPath = `../../bounties/maven/argonaut/1/vulnerability.json`;
var vulnerabilityJson = fs
  .readFileSync(vulnerabilityJsonPath, "utf8")
vulnerabilityJson = JSON.parse(vulnerabilityJson);
const packageName = vulnerabilityJson.Package.Name
const packageId = vulnerabilityJson.PackageVulnerabilityID
console.log('packageName', packageName);
console.log('packageId', packageId);

// Check ID & Package.Name matches the directory name
const validId = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/\S+\/${packageId}\/(vulnerability\.json|README\.md)`, 'g');
const illegalId = diff.filter((item) => !validId.exec(item.path));
console.log('illegalId', illegalId);
if (illegalId.length > 0)
    console.log("Bounty path does not match vulnerability.json `PackageVulnerabilityID` value.");

const validPackageName = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\/(vulnerability\.json|README\.md)`, 'g');
const illegalPackageName = diff.filter((item) => !validPackageName.exec(item.path));
if (illegalPackageName.length > 0)
    console.log("Bounty path does not match vulnerability.json `Package.Name` value.");

// GENERIC TEST (REGEX SHOULD WORK)
console.log('Generic regex:', `bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/(vulnerability\.json|README\.md)`);
const validPath = new RegExp(`bounties\/(maven|npm|other|packagist|pip|rubygems)\/${packageName}\/${packageId}\/(vulnerability\.json|README\.md)`, 'g');
const illegalPath = diff.filter((item) => !validPath.exec(item.path));
if (illegalPath.length > 0)
    console.log("Bounty path does not match vulnerability.json values.");