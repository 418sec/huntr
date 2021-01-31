# Description

`dhtmlx-gantt` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/dhtmlx-gantt
2. Click on Check the live demo https://snippet.dhtmlx.com/5/a69d7378a
3. Insert the xss payload in text field in data Ex: `{id: 2, text: "Task #1'<img src=x onerror=alert(document.location)>",`
4. XSS payload will get executed.
