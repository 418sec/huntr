# Overview

[em-imap](https://rubygems.org/gems/em-imap) is a gem that allows you to connect to an IMAP4rev1 server in a non-blocking fashion.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM). The hostname in a TLS server certificate is not verified. An attacker can assume the identity of a trusted server and introduce malicious data in an otherwise trusted place.
