# Overview

`phppgadmin/phppgadmin` is a web-based administration tool for PostgreSQL. It is perfect for PostgreSQL DB newbies and hosting services, this package is vulnerable to Cross-site Request Forgery (CSRF).

Multiple areas within the application allows sensitive actions to be performed without validating that the request originated from the application. One such area, `database.php`, does not verify the source of an HTTP request. This can be leveraged by a remote attacker to trick a logged-in administrator to visit a malicious page with a CSRF exploit and execute arbitrary system commands on the server.
