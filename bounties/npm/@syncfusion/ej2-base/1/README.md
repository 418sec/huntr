# Description 

`@syncfusion/ej2-base` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open https://www.npmjs.com/package/@syncfusion/ej2-base
2. Click on View Online Demos https://ej2.syncfusion.com/demos/?utm_source=npm&utm_campaign=ej2-base#/material/grid/grid-overview.html
3. Click on Edit in StackBlitz https://stackblitz.com/run?file=data-source.ts
4. Insert the xss payload in any of the values field in data-source.ts. Ex: Inserting the payload in designation: Manager as `let designation: string[] = ['Manager"<img src=x onerror=alert(1)>'`
7. XSS payload will get executed.
