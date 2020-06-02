# Overview
[net.sf.jasperreports:jasperreports](hhttps://github.com/TIBCOSoftware/jasperreports) is an open source reporting engine for Java.

Affected versions of this package are vulnerable to HTML Injection. The attacker can theoretically exploit this vulnerability when other users view a maliciously generated report, where those reports use Fusion Charts and a data source with contents controlled by the attacker.