I would like to report Path traversal in hapi.
It allows an attacker to read arbitrary system files via Symlink.

**Module**
module name: hapi/hapi
version: 19.1.1
npm page: https://www.npmjs.com/package/@hapi/hapi

**Vulnerability**
1. Vulnerability Description
With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory.

2. Steps To Reproduce:
Install the hapi: npm i @hapi/hapi

Create a symlink file within the directory
ln -s /etc/shadow test_shadow

3. Request the file within browser
http://localhost:3000/test_shadow

**Patch**
Reject the symbolically linked path files.