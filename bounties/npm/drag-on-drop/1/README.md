# Description

`drag-on-drop` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open link https://www.npmjs.com/package/drag-on-drop
2. Click on "Full example" which will open a exapmle in codepen.  https://codepen.io/schne324/pen/dZOGeG
3. Edit the js file content with payload in line 32.   Ex: `Item ${i + 1}"<img src=x onerror=alert(1)>`
4. And drag and drop the list of items in the console.
5. XSS payload will get executed.
