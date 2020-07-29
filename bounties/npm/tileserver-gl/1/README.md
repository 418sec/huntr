# Overview

tileserver-gl is a Map tile server for JSON GL styles - vector and server side generated raster tiles.

This package is vulnerable to Cross-site Scripting (XSS). The content of the key `GET` parameter is reflected unsanitized in an HTTP response for the application's main page% causing reflected XSS.
