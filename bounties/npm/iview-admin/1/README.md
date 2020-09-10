# Description
While doing code reviewing on iview-admin i found that the application package is vulnerable to Remote Code Execution
# Proof of Concept 
1. clone the github repo
2. go to package.json, we can see in dev dependencies there used @vue/cli-service
3. so navigated to node_modules -> @vue -> cli-service and open package.json we can see copy-webpack-plugin
4. navigate back to node_modules->copy-webpack-plugin->node_modules->serialize-javascript we can see package.json which uses serialize-javascript 1.4.0
5. which is vulnerable to Arbitary Code Injection as per npmjs adversories 
6. using serialize-javascript 1.4.0 in iview-admin package makes the package vulnerable to Remote Code Execution
https://drive.google.com/file/d/1nHd3RrXgb0gY-FXaxUF3bfETjXFnz-9P/view?usp=sharing
https://www.npmjs.com/advisories/1548
# Impact
Vulnerable to Remote Code Execution
# Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
