# Description

`netlify-cms-widget-markdown` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Use the application or use the demo https://cms-demo.netlify.com/#/collections/posts/new
2. Switch to markdown mode in edtior.
3. Insert the xss payload in to the editor(body) `<img src=x onerror=alert(1)>`
4. XSS payload will get executed.
