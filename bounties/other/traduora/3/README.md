## ✍️ Description
Lack of RateLimiting in the login page of traduora.
## 🕵️‍♂️ Proof of Concept 
* clone the github repo 
* setted up traduora platform to reproduce the vulnerability
* I used an intruder in BURP SUITE to test for rate limiting on the password field.
* In normal intruder function it shows status code 429 that is ratelimit function is there
* To bypass it use intruder with throttle above 700 and use thread 100+ , for wrong password it shows 401 errror if right password comes it shows 200 error.

[POC of Error] https://drive.google.com/file/d/1KpnPcAWBf8SoMJDL7bJp12ZCLxSGjopE/view?usp=sharing
[POC of bypassing ratelimiting] https://drive.google.com/file/d/1hQjLPbJ1lS5rKWv-I8Gv3wi0DOTjX9K2/view?usp=sharing

## 💥 Impact
The attacker is able to perform bruteforce attack in login into victim account.
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
