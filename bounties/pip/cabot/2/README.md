## ✍️ Description
Executed SSRF in cabot check settings, As per CVEs present SSRF is a Top 25 CWE Severity bug.
## 🕵️‍♂️ Proof of Concept 
1. setup cabot to reproduce the vulnerability
2. create an account now login to the account 
3. Go to checks Create an http check in the Endpoint column use a SSRF Payloads and save.
4. Now click run button in that checks
5. SSRF Triggered we got output.
I used burp collaborator first, then checked in my VPS the only open port is 22, then used in localhost 5000 port where cabot is running. 
https://drive.google.com/file/d/1K_w6hpNn3apQsSnXNjELregAHUAcUOjY/view?usp=sharing
https://drive.google.com/file/d/1U67a0zo3aF14F9f_DFJWyrD9z0vXwzKa/view?usp=sharing
https://drive.google.com/file/d/1VfG4esdGLdWtrPHfFtwk8YBXL7KoVZuH/view?usp=sharing
https://drive.google.com/file/d/1TmYabiLl4EVZ229LOCWl65WmD6E6YyMG/view?usp=sharing
## 💥 Impact
Able to execute SSRF payloads in cabot which can be used for port scanning (XSPA).
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
