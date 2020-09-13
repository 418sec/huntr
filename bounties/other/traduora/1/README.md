## ✍️ Description
Username Enumeration in traduora.
## 🕵️‍♂️ Proof of Concept 
1. setup traduora to reproduce the vulnerability 
2. go to sign in page http://localhost:8080/login
3. Append non registered user email and password it shows Error,resource not found 
4. when Appending correct username and fake password it shows Error,unauthorized
Using this way usernames can be enumerated
https://drive.google.com/file/d/1j3DCG7SteEMv_0CBROHB2nkyM4l2aNyZ/view?usp=sharing
https://drive.google.com/file/d/11fwC41hkHE9JjedyOWNH42wkVU4THQh3/view?usp=sharing
## 💥 Impact
Able to Enumerate user email which is the username in sign in page 
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_


