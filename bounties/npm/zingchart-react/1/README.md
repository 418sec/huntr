# Description

`zingchart-react` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://github.com/zingchart/zingchart-react
2. Open link in about https://www.zingchart.com/docs/integrations/react
3. Open in Sandbox https://codesandbox.io/s/zingchart-react-wrapper-example-dxfc9?from-embed
4. Insert the xss payload in any of the values field in series in Simple.jsx. EX: `values: [4, '><img src=x onerror=alert(1)>', 3, 4, 5, 3, 5, 4, 11]`
7. XSS payload will get executed.
