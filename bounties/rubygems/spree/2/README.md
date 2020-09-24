# Description
Username enumeration on the "Forgot Password" page of Spree.
# Proof of Concept 
1. Clone the github repo & set up spree platform -- OR -- use the demo site: https://demo.spreecommerce.org/
2. Create a new account by clicking the User menu (upper righthand corner) > "Sign Up"
3. Log out and go back to the "Login" page.
4. Click "Forgot Password"
5. Enter an incorrect email and click "Reset My Password".

* It shows 200 OK for wrong information and if password matches BURP show a 302 FOUND status code.
* [POC] https://drive.google.com/file/d/1di5jNI1hyYoFcqs17iCG-EUibDa9TWhI/view?usp=sharing; https://drive.google.com/file/d/1xSgV14W32V34htF5RWcxnVwugI6gEe8L/view?usp=sharing

# Impact
The attacker is able to enumerate usernames via the "Forgot Passowrd" functionality.
# Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
