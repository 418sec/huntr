const glob = require("glob")
const Ajv = require('ajv');
var ajv = new Ajv();

var schema = {
    "type": "object",
    "properties": {
        "PackageVulnerabilityID": { "type": "string" },
        "DisclosureDate": { "type": "string" },
        "AffectedVersionRange": { "type": "string" },
        "Summary": { "type": "string" },
        "Author": {
            "type": "object",
            "properties": {
                "Username": { "type": "string" },
                "Name": { "type": "string" },
            }
        },
        "Package": {
            "type": "object",
            "properties": {
                "Registry": { "type": "string" },
                "Name": { "type": "string" },
                "URL": { "type": "string" }
            }
        },
        "CWEs":
        {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "ID": { "type": "string" },
                        "Description": { "type": "string" },
                    }
                },
            ]
        },
        "CVSS": {
            "type": "object",
            "properties": {
                "Version": { "type": "string" },
                "AV": { "type": "string" },
                "AC": { "type": "string" },
                "PR": { "type": "string" },
                "UI": { "type": "string" },
                "S": { "type": "string" },
                "C": { "type": "string" },
                "I": { "type": "string" },
                "A": { "type": "string" },
                "E": { "type": "string" },
                "RL": { "type": "string" },
                "RC": { "type": "string" },
                "Score": { "type": "string" }
            }
        },
        "CVEs": {
            "type": "array",
        },
        "Repository": {
            "type": "object",
            "properties": {
                "URL": { "type": "string" },
                "Codebase": {
                    "type": "array",
                }
            }
        },
        "Permalinks": {
            "type": "array",
        },
        "References": {
            "type": "array",
        }
    },
    "required": ["PackageVulnerabilityID", "DisclosureDate"],
}

glob("bounties/**/vulnerability.json", [], function (_err, files) {
    files.map(file => {
        const data = require(`./${file}`)
        var valid = ajv.validate(schema, data);
        if (!valid) throw `${file} ${ajv.errors[0].message}`
    })
})
