## ✍️ Description
Lack of RateLimiting in the login page of shopizer.
## 🕵️‍♂️ Proof of Concept 
* clone the github repo 
* setted up shopizer platform to reproduce the vulnerability
* I used an intruder in BURP SUITE to test for rate limiting on the password field.
* It shows 908 length for all wrong password request and highr than 908 for righ password request
* [POC] https://drive.google.com/file/d/10ZjIdit0mony7kJavgceraAPdlPVgEEp/view?usp=sharing
## 💥 Impact
The attacker is able to perform bruteforce attack to login into victim account.
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
