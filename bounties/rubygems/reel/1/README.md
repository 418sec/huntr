# Overview
reel is a fast, non-blocking "evented" web server built on http_parser.rb, websocket-driver, Celluloid::IO, and nio4r.
Note: This project is deprecated, and is not maintained anymore.
Affected versions of this package are vulnerable to HTTP Request Smuggling. HTTP pipelining issues and request smuggling attacks might be possible due to incorrect Content-Length and Transfer encoding header parsing.
It is possible conduct HTTP request smuggling attacks by sending the Content-Length header twice. Furthermore, invalid Transfer Encoding headers were found to be parsed as valid which could be leveraged for TE:CL smuggling attacks. 
By manipulating the HTTP response the attacker could poison a web-cache, perform an XSS attack, or obtain sensitive information from requests other than their own.