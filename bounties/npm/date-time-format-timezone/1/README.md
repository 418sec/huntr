# Description
```date-time-format-timezone``` is a package that surgically polyfills timezone support in ```Intl.DateTimeFormat``` API. 
This package is vulnerable to ```MITM``` or ```Man-In-The-Middle``` through an insecure download of sensitive files. The ```download.js``` file downloads a tar file through plaintext ```ftp``` format which could be susceptible to change of the file leading to ```tarslip```(vulnearbility causing arbitrary file writing due to insecure extraction of tar files) or even ```Arbitrary Code Execution```

# Proof-of-Concept
```
1. Open up wireshark and start listening
2. git checkout https://github.com/yahoo/date-time-format-timezone.git
    npm install
    grunt download
3. Filter the results to ftp
```