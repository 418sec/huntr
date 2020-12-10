# Description

`@opd/g2plot-react` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce
1. Open https://www.npmjs.com/package/@opd/g2plot-react and go to github link https://github.com/open-data-plan/g2plot-react
2. Click on `Edit on CodeSandbox` in Readme https://codesandbox.io/s/g2plot-react-example-xx3gp?fontsize=14&hidenavigation=1&theme=dark
3. Edit alias field in meta->value and add the payload `'<img src=x onerror=alert(1)>`. or Edit any of the type field in data1 and add the payload `'<img src=x onerror=alert(1)>`.
4. XSS payload will get executed.
