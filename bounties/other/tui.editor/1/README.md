# Description

`tui.editor` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic
2. Insert the xss payload in editor Ex: `<svg> <svg><svg onload=alert(111)> <svg>`
3. XSS payload will get executed.
