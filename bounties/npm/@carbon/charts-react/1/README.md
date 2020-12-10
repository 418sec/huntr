# Description

`@carbon/charts-react` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open link https://www.npmjs.com/package/@carbon/charts-react and click on "Storybook demos"
2. Click on any chart For example pie chart https://carbon-design-system.github.io/carbon-charts/react/?path=/story/pie--pie
3. And click on "Edit in CodeSandbox" https://codesandbox.io/s/zb9hb
4. Edit any of the group field in data and add the payload `'<img src=x onerror=alert(1)>`.
5. XSS payload will get executed.
