# Description
Encountered Session Fixation bug in userfrosting/UserFrosting repo. As per certain CVEs present Session Fixation is a medium to High Severity bug. 
# Proof of Concept 
1. setup UserFrosting platform to reproduce the vulnerability
2. open an account in multiple browsers like 2 different private modes of chrome and firefox.
3. login the same account in both browsers.
4. change the password of the account in one browser, meanwhile, try to reload the same account in the other browser.
5. we can see the old session still works and that there is no new session created for the change of password.
# Impact
An attacker is able to maintain access with old sessions even if the security of the account is updated.
# Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
