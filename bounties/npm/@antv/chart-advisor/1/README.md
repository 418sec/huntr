# Description

`@antv/chart-advisor` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Install the package with `npm i @antv/chart-advisor` or try the live demo here https://ava.antv.vision/en/examples/chart-advisor/auto-chart#custom-rules or try https://codesandbox.io/s/vqtzo?file=/index.jsx
2. Edit any of the type field in data and add the payload `"<img src=x onerror=alert(1)>`.  
3. XSS payload will get executed.
