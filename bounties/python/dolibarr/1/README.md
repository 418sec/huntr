# Overview

dolibarr is a modern and easy to use web software to manage your business.
Affected versions of this package are vulnerable to Cross-site Scripting %28XSS). The module renders user-uploaded html files in the browser when the attachment parameter is removed from the direct download link.

Details
A cross-site scripting attack occurs when the attacker tricks a legitimate web-based application or site to accept a request as originating from a trusted source.
This is done by escaping the context of the web application%3B the web application then delivers that data to its users along with other trusted dynamic content%2C without validating it. The browser unknowingly executes malicious script on the client side %28through client-side languages%3B usually JavaScript or HTML) in order to perform actions that are otherwise typically blocked by the browser%u2019s Same Origin Policy.
%u05BFInjecting malicious code is the most prevalent manner by which XSS is exploited%3B for this reason%2C escaping characters in order to prevent this manipulation is the top method for securing code against this vulnerability.
Escaping means that the application is coded to mark key characters%2C and particularly key characters included in user input%2C to prevent those characters from being interpreted in a dangerous context. For example%2C in HTML%2C %3C can be coded as %26lt%3B and %3E can be coded as %26gt%3B in order to be interpreted and displayed as themselves in text%2C while within the code itself%2C they are used for HTML tags. If malicious content is injected into an application that escapes special characters and that malicious content uses %3C and %3E as HTML tags%2C those characters are nonetheless not interpreted as HTML tags by the browser if they%u2019ve been correctly escaped in the application code and in this way the attempted attack is diverted.
The most prominent use of XSS is to steal cookies %28source%3A OWASP HttpOnly) and hijack user sessions%2C but XSS exploits have been used to expose sensitive information%2C enable access to privileged services and functionality and deliver malware.
Types of attacks
There are a few methods by which XSS can be manipulated%3A

Type
Origin
Description

Stored
Server
The malicious code is inserted in the application %28usually as a link) by the attacker. The code is activated every time a user clicks the link.

Reflected
Server
The attacker delivers a malicious link externally from the vulnerable web site application to a user. When clicked%2C malicious code is sent to the vulnerable web site%2C which reflects the attack back to the user%u2019s browser.

DOM-based
Client
The attacker forces the user%u2019s browser to render a malicious page. The data in the page itself delivers the cross-site scripting data.

Mutated

The attacker injects code that appears safe%2C but is then rewritten and modified by the browser%2C while parsing the markup. An example is rebalancing unclosed quotation marks or even adding quotation marks to unquoted parameters.

Affected environments
The following environments are susceptible to an XSS attack%3A

Web servers
Application servers
Web application environments

How to prevent
This section describes the top best practices designed to specifically protect your code%3A

Sanitize data input in an HTTP request before reflecting it back%2C ensuring all data is validated%2C filtered or escaped before echoing anything back to the user%2C such as the values of query parameters during searches.
Convert special characters such as %3F%2C %26%2C /%2C %3C%2C %3E and spaces to their respective HTML or URL encoded equivalents.
Give users the option to disable client-side scripts.
Redirect invalid requests.
Detect simultaneous logins%2C including those from two separate IP addresses%2C and invalidate those sessions.
Use and enforce a Content Security Policy %28source%3A Wikipedia) to disable any features that might be manipulated for an XSS attack.
Read the documentation for any of the libraries referenced in your code to understand which elements allow for embedded HTML.
