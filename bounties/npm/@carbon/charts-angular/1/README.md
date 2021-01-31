# Description

`@carbon/charts-angular` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Create a sandbox using Angular https://codesandbox.io/s
2. Edit the data in the files using the data in the following link such as src/index.html and other files as well
https://carbon-design-system.github.io/carbon-charts/angular/?path=/story/pie--pie
3. And add the appropriate dependencies
4. Insert the xss payload in any of the group field in data of the file app.component.ts Ex: `group: "a'><img src=x onerror=alert(1)>",`
5. XSS payload will get executed.
