# Description

`frappe-charts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open NPM repo https://www.npmjs.com/package/frappe-charts
2. Open the Explore demos https://frappe.io/charts
3. At the bottom find the sandbox Ref: https://codesandbox.io/s/frappe-charts-demo-viqud?from-embed=&file=/src/index.js
4. Use the payload `"><img/&#09;&#10;&#11; src=`~` onerror=alert('XSS')>` and place it in 
          name: "Some Data'><img/&#09;&#10;&#11; src=`~` onerror=alert(document.domain)>",
5. XSS payload will get executed.
