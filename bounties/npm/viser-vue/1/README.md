# Description

`viser-vue` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Install the package with `npm i viser-vue` try the live demo here https://viserjs.github.io/demo.html#/viser/pie/basic-pie
2. Edit any of the item field in sourceData and add the payload `<img src=x onerror=alert(1)>`. Sample code ex: `{ item: 'A"<img src=x onerror=alert(1)>', count: 40 },`
3. XSS payload will get executed.
