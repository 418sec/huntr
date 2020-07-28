# Overview

opencart is a shopping cart system.

This package is vulnerable to Cross-site Scripting(XSS). Remote authenticated users can execute XSS attacks by creating a filename in the users image upload section due to a lack of entity encoding.
