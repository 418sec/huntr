## 💻 Repository
_Please provide the repository URL where you have found a vulnerability._

Repository: `https://github.com/...`

## 🔗 Permalinks

_Now let us know specifically with [permalinks]([https://help.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet](https://help.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)), where the vulnerabile code is and a brief description of the issue._

1. `https://github.com/...`
2. `https://github.com/...`
3. `https://github.com/...`
4. `...`

## ✍️ Title

_Please provide a clear and concise title that includes the type of vulnerability and the impacted package (e.g. Remote Code Execution: is-promise)._

Title:

## 📦 Package URL

_Please provide a direct link to the package and registry that hosts this package (e.g. NPM, PyPI). For example, is-promise would be [https://www.npmjs.com/package/is-promise](https://www.npmjs.com/package/is-promise) as it is served by the NPM package manager._

Package Link: 

## 🕵️‍♂️ Proof of Concept
<!-- A way (code) to prove that the package is vulnerable -->

_Please provide a code sample or use case that demonstrates the vulnerability and the outcome of this vulnerability. You can provide a code example or screenshot. For example:_
```js
// poc.js
var package = require('vulnerable-package')
var query = {
	pArgs:['test','; touch HACKED; #']
};
package.lookup(query, function(){ console.log('Done!') })
```
---
```
🖋️ Write your proof of concept here...
```
---
```
📸 Put your screenshots here...
```
---

## 💥 Impact

_What security impact could the attacker achieve by exploiting this vulnerability?_

## References
<!-- Any supporting materials and references -->
_Please provide any other supporting material or references._

- `...`
- `...`
- `...`

## ☎️ Contact

<!-- Any contact made to the package owner/maintainer(s) or to another bug bounty board -->

_Have you made any contact to the package author/maintainer(s) or to another disclosure program?_


## ✅ Checklist

_Please put an `x` in each box to confirm you have completed the checklist._

**In my pull request, I have:**

- [ ] _Created and populated the `README.md` and `vulnerability.json` files_
- [ ] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [ ] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [ ] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [ ] _Checked that the vulnerability affects the latest version of the package released_
- [ ] _Checked that a fix does not currently exist that remediates this vulnerability_
- [ ] _Complied with all applicable laws_
