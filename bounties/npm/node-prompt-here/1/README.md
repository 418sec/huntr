# Overview

`node-prompt-here` is a package to open a console window at given absolute directory, this package are vulnerable to Command Injection.

The `runCommand()` is called by `getDevices()` function in file `linux/manager.js`, which is required by the index. `process.env.NM_CLI` in the file `linux/manager.js` . This function is used to construct the argument of function `execSync()`, which can be controlled by users without any sanitization.

# Proof of Concept

```
process.env.NM_CLI = 'echo vulnerable > create.txt & nmcli';
var root = require("network-manager");
root.getDevices();
```
