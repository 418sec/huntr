# Description

`zingchart` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open NPM repo https://www.npmjs.com/package/zingchart
2. Open Gallery and open any chart ex: Colourful pie chart
https://www.zingchart.com/gallery/colorful-pie-chart
3. click on edit
https://app.zingsoft.com/demos/create/ZM1PLQOL?fork&_ga=2.138651063.504517797.1604584645-321399192.1604584645
4. Insert the xss payload in any of the text field in series: ex: text: `'Chrome"><img/&#09;&#10;&#11; src=`~` onerror=alert("XSSSSSSSS")>'`
5. XSS payload will get executed.
