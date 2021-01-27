# Description

`frappe-charts` is vulnerable to `Cross-Site Scripting (XSS)` due to an incomplete fix https://github.com/frappe/charts/commit/d5706a501b44fce6949216b635ed6c5e785c471d.

# Steps To Reproduce

1. Open the following codesandbox https://codesandbox.io/s/frappe-charts-demo-forked-40w0f?file=/src/index.js
2. Use the payload `"<img src=x onerror=alert(1)>"` and place it in `values: [25, "<img src=x onerror=alert(1)>"`
3. XSS payload will get executed.
