## ✍️ Description
Encountered Session Fixation bug in traduora repo which can be chained along with my older submission on Massive account creation.
## 🕵️‍♂️ Proof of Concept 
* clone the github repo 
* setted up traduora platform to reproduce the vulnerability
* open an account in multiple browsers like 2 different private modes of chrome and firefox.
* login the same account in both browsers.
* change the password of the account in one browser, meanwhile, try to reload the same account in the other browser.
* we can see the old session still works and that there is no new session created for the change of password.
## 💥 Impact
An attacker is able to maintain access with old sessions even if the security of the account is updated i had already submitted massive account creation bug so chaining with massive account creation makes this bug more critical
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
