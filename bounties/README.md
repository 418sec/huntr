# Overview 

This folder contains all the bounties that have been hosted by the https://huntr.dev platform.  

Vulnerabilities are stored within folders with the following format:
`/bounties/{RegistryName}/{PackageName}/{PackageVulnerabilityID}`

- `PackageVulnerabilityID` is a numerical incrementing ID that is unique to the specific package (not universally unique)
- `DisclosureDate` Format: **YYYY-MM-DD**
- `AffectedVersionRange` is to specify the vulnerable versions of the package
  - _if all the versions are vulnerable, enter `*` as the value_
- `Package`:
  - `Registry` is the commonly used name for the main registry the package resides on
    - **Examples:**
    - `maven` - Registry for Java packages
    - `npm` - Registry for NodeJS packages
    - `packagist` - Registry for PHP packages
    - `pip` - Registry for Python packages
    - `rubygems` - Registry for Ruby packages
    - _If the package you found the vulnerability doesn't belong to any public registry, enter `other` as the value_
  - `Name` is the name used to describe the package on the registry they are hosted on
  - `URL` is the hyperlink/URL to the package on the corresponding registry
- `CWEs`:
  - `ID` is the **CWE (Common Weakness Enumeration)** ID of the vulnerability you've found
  - `Description` is the name of the vulnerability (of the CWE ID)
  - An example would be:
  ```json
  "CWEs": [
      {
          "ID": "79",
          "Description": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
      }
  ]
  ```
- `CVSS` or **Common Vulnerability Scoring System** is an open industry standard for assessing the severity of computer system security vulnerabilities
  - To fill up the CVSS score, you can use a [CVSS v3.1 Calculator](https://www.first.org/cvss/calculator/3.1)
- `CVEs` or **Common Vulnerabilities and Exposures** is a system which provides a reference-method for publicly known information-security vulnerabilities and exposures
  - If the vulnerability you're disclosing relies on a public CVE exploit/finding, enter that corresponding CVE ID
- `Repository`:
  - `URL` is the hyperlink/URL to the package's GitHub repository
  - `Codebase` is to specify the languages used in the package
- `Permalinks` are to specify the blocks of code that are responsible for causing the vulnerability
  - **Refer:** [Creating a permalink to a code snippet](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)
- `References` are the links to articles/exploits/blogs which are related to or regarding the vulnerability you're disclosing

# Files

A valid bounty is split between 3 files: 

## README.md

This is the description of the bounty that appears on a given bounty page. It's rendered with a simple markdown preprocessor with basic styling. This file is created by a huntr as part of their disclosure.

## vulnerability.json

This contains all the metadata related to the vulnerability. This file is created by a huntr as part of their disclosure.

```json
{
  "PackageVulnerabilityID": "",
  "DisclosureDate": "",
  "AffectedVersionRange": "",
  "Summary": "",
  "Contributor": {
    "Discloser": "",
    "Fixer": ""
  },
  "Package": {
    "Registry": "",
    "Name": "",
    "URL": ""
  },
  "CWEs": [
    {
      "ID": "",
      "Description": ""
    }
  ],
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
  "CVEs": [""],
  "Repository": {
    "URL": "",
    "Codebase": [""]
  },
  "Permalinks": [""],
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

# How To Disclose (Video)

<p align="center">
  <a href="https://www.youtube.com/watch?v=KBB5YtU84F8" title="Click to watch the Instruction Video"><img src="https://img.youtube.com/vi/KBB5YtU84F8/0.jpg"></a>
</p>
