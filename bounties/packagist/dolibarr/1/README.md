# Overview

dolibarr is a modern and easy to use web software to manage your business.

This package is vulnerable to Cross-site Scripting (XSS). The module renders user-uploaded html files in the browser when the attachment parameter is removed from the direct download URL.
