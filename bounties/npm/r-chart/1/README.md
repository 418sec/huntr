# Description

`r-chart` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/r-chart
2. Click the image of Line Chart Preview(Click image and open demo on stackblitz): https://stackblitz.com/edit/r-chart-demo-line-chart?embed=1&file=src/App.js
3. Edit any of the field in keys and add the payload `"<img src=x onerror=alert("XSS")>`. Ex: `'January','February','March"<img src=x onerror=alert("XSS")>',`
4. XSS payload will get executed.
