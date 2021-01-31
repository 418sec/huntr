# Description

`bizcharts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce-:  

1. Open NPM repo https://www.npmjs.com/package/bizcharts
2. Open the demo https://bizcharts.net/product/BizCharts4/gallery
3. Select any chart(I used pie chart) Ex: https://bizcharts.net/product/BizCharts4/demo/370
4. Use the payload `"><img/&#09;&#10;&#11; src=`~` onerror=alert(document.location)>` and place it in 
                       item: '事例一      PAYLOAD         ', percent: 0.4 },
5. XSS payload will get executed.
