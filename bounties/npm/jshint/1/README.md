# :bug: Description

The `jshint` package is vulnerable against `RCE` since `user-supplied` arguments are unsafely formatted inside a command and executed, leading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var jshint = require("jshint/bin/apply");

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:
