

 const diff = [
    {"change":"A","path":"bounties/maven/argonaut/2/README.md"},
    {"change":"A","path":"bounties/maven/argonaut/2/vulnerability.json"}
]

console.log('diff[0].path', diff[0].path);
console.log('diff[1].path', diff[1].path);

// Get required key values
const packageId = "2"
const packageName = "argonaut"
const packageRegistry = "maven"

// Construct valid paths
const vulnerabilityDir = `bounties/${packageRegistry}/${packageName}/${packageId}/vulnerability.json`
const readmeDir = `bounties/${packageRegistry}/${packageName}/${packageId}/README.md`
console.log('vulnerabilityDir', vulnerabilityDir);
console.log('readmeDir', readmeDir);

// Filter paths that do not match
const illegalDir = diff.filter((item) => !(item.path == vulnerabilityDir || item.path == readmeDir));
console.log('illegalDir', illegalDir);
if (illegalDir.length > 0)
    console.log('illegalDir.length', illegalDir.length)