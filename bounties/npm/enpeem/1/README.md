## Vulnerability Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/balderdashy/enpeem/blob/master/index.js#L82 . The `options` should be inserted in the 2' position as arguments and not be concatenated inside the main command without any check.

## POC

```js
// poc.js
var npm = require('enpeem');
npm.update({production:'test; touch HACKED; #', path:''});

```

## Impact
`RCE` via command formatting on `enpeem
