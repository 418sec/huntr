# Description

`@ant-design/charts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/@ant-design/charts
2. Open Gallery https://charts.ant.design/demos/global/
3. Select any chart(Ex:pie chart https://charts.ant.design/demos/pie)
4. Edit in Codesandbox https://codesandbox.io/s/zdk6l
5. We can change the version("@ant-design/charts": "1.0.7") in package.json https://codesandbox.io/s/zdk6l?file=/package.json:131-160 see the screenshots.
6. Insert the xss payload in any of the type field in data. EX: type: `'a"><img src=x onerror=alert(1)>',`
7. XSS payload will get executed.
