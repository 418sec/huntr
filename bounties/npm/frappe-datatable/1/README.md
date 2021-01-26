# Description

`frappe-datatable` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open the following codesandbox https://codesandbox.io/s/frappe-datatable-demo-forked-rrmsy?file=/src/data.js
2. Insert the xss payload in any of the values field in data in data.js Ex: `let data = [["Tiger Nixon'<img src=x onerror=alert(1)>",`
3. XSS payload will get executed.
