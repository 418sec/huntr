## ✍️ Description
Admin account can be take over by a user using Blind XSS in Instance of user.
## 🕵️‍♂️ Proof of Concept 
1. Setup cabot to reproduce the vulnerability
2. Create an admin account and using the admin account create a user account
3. Open 2 browser tabs login with admin account and another with user account.
4. Using user account create an instance in the Address part use a put a XSS payload.
5. Create a Service choose admin account in users to notify and in URL use a gibberish word to make error (I used XSS) .
6. Now open Admin account navigate to checks we can see that it failed now click run button in that checks.
7. Blind XSS triggered in admin account and we got the cookie.
I used both xsshunter.com and blindf.com platform.
https://drive.google.com/file/d/1wrgPledd9WVQ69Yk84S3z3ZjusoDJXli/view?usp=sharing
## 💥 Impact
Able to executed Blind XSS in admin account through notification from normal account.
Any account can be takeover by user account by initiating a instances and service with blind xss payload. 
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_


