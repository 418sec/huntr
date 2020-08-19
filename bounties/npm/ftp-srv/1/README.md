# Overview

`ftp-srv` is a Modern, extensible FTP Server.

This package is vulnerable to Server-side Request Forgery (SSRF), itt fails to prevent remote clients to access other resources in the network, for example when connecting to the server through `telnet`. This allows attackers to access any network resources available to the server, including private resources in the hosting environment.
