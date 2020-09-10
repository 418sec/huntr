## ✍️ Description
Account takeover using Blind XSS in Survey application.
## 🕵️‍♂️ Proof of Concept 
1. setup odoo to reproduce the vulnerability
2. create an account and navigate to Apps 
3. Install Survey and create new survey
4. Give a survey title and add a Question and go to the option
5. Use constraint Mandatory answer and put Blind XSS payload on Error Message
6. save and click Test. Blind XSS triggered and attacker gets the session.
7. To exploit this widely to takeover any account use share option and share via email and use login required and in  accessmode use Anyone with the link 
I used xsshunter.com platform for creating payload.
https://drive.google.com/file/d/1NycVd3-IjgFwpZIxLggMxW6AvSL5Ckci/view?usp=sharing
https://drive.google.com/file/d/1S_G6Pn89qmwwtBdQFNDtFjcC4R5s63_L/view?usp=sharing
https://drive.google.com/file/d/1kpjlDb3XVcNjCQkMARX7CNiO3tj_FNWE/view?usp=sharing
https://drive.google.com/file/d/13mUeUHFAlb9RQQjtLPjLkKzLO4id3F1b/view?usp=sharing
## 💥 Impact
Able to executed Blind XSS in admin panel using survey application.
Any account can be takeover by sharing the link via share option and using some constraints. 
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_


