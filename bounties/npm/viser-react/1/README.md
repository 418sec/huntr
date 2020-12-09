# Description

`viser-react` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce
1. Install the package with `npm i viser-react` try the live demo here https://viserjs.github.io/demo.html#/viser/pie/basic-pie
2. We can edit using any of the 3 editors(React--current editor)
3. Edit any of the item field in sourceData and add the payload `<img src=x onerror=alert(1)>`. Sample code ex: `{ item: 'A"<img src=x onerror=alert(1)>', count: 40 },`
4. Click on Run -> XSS payload will get executed.
