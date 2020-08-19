# Overview

`network-manager` is a working with ethernet and wifi interfaces, this package are vulnerable to Command Injection.

The `runCommand()` function within `common.js` file is called by `getDevices()` function in file `linux/manager.js`, which is required by the `index.process.env.NM_CLI` in the file `linux/manager.js`. This is used to construct the argument of function `execSync()`, which can be controlled by a user without any sanitization.

# Proof of Concept

```
process.env.NM_CLI = 'echo vulnerable > create.txt & nmcli';
var root = require("network-manager");
root.getDevices();
```
