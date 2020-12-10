# Description

`@carbon/charts-vue` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open link https://www.npmjs.com/package/@carbon/charts-vue and click on "Storybook demos"
2. Click on any chart For example pie chart https://carbon-design-system.github.io/carbon-charts/vue/?path=/story/pie--pie
3. And click on "Edit in CodeSandbox" https://codesandbox.io/s/6nz9i
4. Edit any of the group field in data and add the payload `'<img src=x onerror=alert(1)>`.
5. XSS payload will get executed.
