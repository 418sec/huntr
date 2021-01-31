# Overview
`docker-compose-remote-api` is a Connection interface between docker-compose and the Docker Remote API, this package is vulnerable to Command Injection.

Within the `index.js` file of the package, the function `exec(serviceName, cmd, fnStdout, fnStderr, fnExit)` uses the variable `serviceName` which can be controlled by users without any sanitization.

# Proof of Concept
```
var Root = require("docker-compose-remote-api");
var root = Root({cwd:__dirname}).exec("& touch vulnerable.txt");
```