# Description
Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation. Selenium specifically provides infrastructure for the W3C WebDriver specification — a platform and language-neutral coding interface compatible with all major web browsers.
This package is vulnerable to MITM or `Man-In-The-Middle` attack due to a downloading resources through insecure protocols. It is possible for an attacker to intercept and alter the packages which may leads to `RCE` other attacks which may help the attacker gain access to host.
