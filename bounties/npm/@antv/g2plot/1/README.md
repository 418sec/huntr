# Description

`@antv/g2plot` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Install the package with `npm i @antv/g2plot` or try the live demo here https://g2plot.antv.vision/en/examples/case/statistical-scenario#pie
2. Edit any of the type field in data and add the payload `"<img src=x onerror=alert(1)>`.  
3. XSS payload will get executed.
