## ✍️ Description
Homebrew-Core is a Core formulae for the Homebrew package manager.
This package is vulnerable to MITM or Man-In-The-Middle attack due to a downloading resources through insecure protocols. It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

* https://github.com/Homebrew/homebrew-core/blob/master/Formula/rpm.rb

All the files downloaded is available in https which is secure.
## 💥 Impact
The attacker is able to perform MiTM attacks due to downloading resources through insecure protocols
## ✅ Checklist
- [x] _Created and populated the README.md and vulnerability.json files_
- [x] _Provided the repository URL and any applicable [permalinks]([https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files](https://help.github.com/en/github/managing-files-in-a-repository/getting-permanent-links-to-files))_
- [x] _Defined all the applicable weaknesses ([CWEs]([https://cwe.mitre.org/](https://cwe.mitre.org/)))_
- [x] _Proposed the CVSS vector items i.e. User Interaction, Attack Complexity_
- [x] _Checked that the vulnerability affects the latest version of the package released_
- [x] _Checked that a fix does not currently exist that remediates this vulnerability_
- [x] _Complied with all applicable laws_
