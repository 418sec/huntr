# Description

`d2b` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/d2b
2. Open docs http://docs.d2bjs.org/ (You can see the d2b API references here.)
3. Select any chart(Ex:pie chart http://docs.d2bjs.org/chartsAdvanced/pie.html)
4. Edit in Codesandbox https://codesandbox.io/s/github/d2bjs/demos/tree/master/charts/pie/default-donut?from-embed
5. We can change the version("d2b": "1.0.12")in package.json https://codesandbox.io/s/d2b-pie-default-donut-demo-forked-seghw?file=/package.json:231-246 see the screenshots.
6. Insert the xss payload in any of the label field in data. EX: `{label: 'arc 1"><img src=x onerror=alert(1)>', value: 23},`
7. XSS payload will get executed.
