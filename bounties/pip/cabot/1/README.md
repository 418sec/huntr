# Description
Executed Persistent stored XSS in cabot check settings, as well as the address field. As per CVEs present Stored XSS is a High Severity bug.
# Proof of Concept 
1. setup cabot to reproduce the vulnerability
2. create an account now login to the account 
3. Go to checks Create and navigate to http check, In the Endpoint column append a XSS payload. You can also create 
4. Now we can see a failed check now click run button in that checks
5. XSS triggered we got output.
6. If we try again the persistant XSS get triggered
https://drive.google.com/file/d/1hcRdxOArwzYlPOmBIj9sDkpLLGUXpiu2/view?usp=sharing
https://drive.google.com/file/d/1wrgPledd9WVQ69Yk84S3z3ZjusoDJXli/view?usp=sharing
# Impact
Able to execute Persistent stored XSS payloads in cabot which can be used to capture user cookie.
# Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
