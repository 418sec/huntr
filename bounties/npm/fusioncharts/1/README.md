# Description

`fusioncharts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open official website https://www.fusioncharts.com/ 
2. Go to https://www.fusioncharts.com/fusioncharts
3. Go to https://www.fusioncharts.com/charts/pie-doughnut-charts/donut-chart-in-3d?framework=javascript
4. Edit in CODEPEN https://codepen.io/pen?&editable=true&editors=101=https%3A%2F%2Fwww.fusioncharts.com%2F
5. We can check the version in https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js see the screenshots.
6. Insert the xss payload in any of the value field in data. EX: value: "290'><img/&#09;&#10;&#11; src=`~` onerror=alert('XSSSSSSSS')>"
7. XSS payload will get executed.
