## Details
I would like to report a `RCE` issue in the `enpeem` module.
It allows to execute `arbitrary commands remotely inside the victim's PC`

## Module
* **module name:** `enpeem`
* **version:** `1.0.1`
* **npm page:** `https://www.npmjs.com/package/enpeem`

## Module Description
> Lightweight wrapper for accessing npm programmatically (alternative to adding npm as a dependency)

## Module Stats
[1,031] downloads in the last week

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
