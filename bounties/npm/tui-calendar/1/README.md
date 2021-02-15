# Description

`tui-calendar` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open any example https://nhn.github.io/tui.calendar/latest/tutorial-example00-basic
2. Edit any of the event in calendar with script ex: `AA"<img src=x onerror=alert('XSS')>'`
3. XSS payload will get executed.
