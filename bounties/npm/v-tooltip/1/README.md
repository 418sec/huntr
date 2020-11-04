# Description

`v-tooltip` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce-:  

1. Open NPM repo https://www.npmjs.com/package/v-tooltip
2. In Usefullinks click on JSFiddle--> https://jsfiddle.net/Akryum/tsjco74e/
3. Use the payload `"><img/src=x onerror=alert("XSSSSSSSSSSS")>` and place it in tooltip message data.
5. XSS payload will get executed.
