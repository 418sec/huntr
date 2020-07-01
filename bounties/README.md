# Overview
This folder contains all the bounties that have been hosted by the https://huntr.dev platform.

Vulnerabilities are stored within folders with the following format:
`/bounties/{RegistryName}/{PackageName}/{PackageVulnerabilityID}`
- RegistryName is the commonly used name for the main registry the package resides on
- PackageName is the name used to describe the package on the registry they are hosted on
- PackageVulnerabilityID is a numerical incrementing ID that is unique to the specific package (not universally unique)

# Files
A valid bounty is split between 3 files:

## README.md
This is the description of the bounty that appears on a given bounty page. It's rendered with a simple markdown preprocessor with basic styling. This file is created by a huntr as part of their disclosure.

```README
## Description

## PoC

## Impact

What impact does the vulnerability have?

## Contact

Have you had any contact with the package owner or others about this issue?

## Checklist

<!-- Please put an `x` in each box to confirm you have completed the checklist. -->

**In my pull request, I have:**

- [ ] _Created and populated the `README.md` and `vulnerability.json` files_
- [ ] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [ ] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [ ] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [ ] _Checked that the vulnerability affects the latest version of the package released_
- [ ] _Checked that a fix does not currently exist that remediates this vulnerability_
- [ ] _Complied with all applicable laws_
```


## vulnerability.json
This contains all the metadata related to the vulnerability. This file is created by a huntr as part of their disclosure.

```json
{
    "PackageVulnerabilityID": "",
    "DisclosureDate": "",
    "AffectedVersionRange": "",
    "Summary": "",
    "Author": {
        "Username": "",
        "Name": ""
    },
    "Package": {
        "Registry": "",
        "Name": "",
        "URL": ""
    },
    "CWEs": [{
        "ID": "",
        "Description": ""
    }],
    "CVSS": {
        "Version": "",
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
        "Score": ""
    },
    "CVEs": [
        ""
    ],
    "Repository": {
        "URL": "",
        "Codebase": [
            ""
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
```

## bounty.json
This contains all the metadata related to the bounty. This file only persists whilst the bounty is available (the vulnerability is not fixed). This file is created by the huntr team, once a disclosure has been reviewed.

```json
{
    "ForkURL": "",
    "Bounty": {
        "Credit": ,
        "Cash": 
    }
}
```
