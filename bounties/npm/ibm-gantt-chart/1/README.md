# Description

`ibm-gantt-chart` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/ibm-gantt-chart
2. Copy the code from usage example and make a test.html  https://www.npmjs.com/package/ibm-gantt-chart#usage
3. And use `<link href="https://unpkg.com/ibm-gantt-chart@0.5.9/dist/ibm-gantt-chart.css" rel="stylesheet" />` and
   `<script src="https://unpkg.com/ibm-gantt-chart@0.5.9/dist/ibm-gantt-chart.js"></script>`
4. Insert the xss payload in name field in data Ex: `name: 'Bethanie"<img src=x onerror=alert(1)>',`
5. Open the test.html file in any browser, XSS payload will get executed.
