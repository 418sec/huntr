# Description
The selenium-trunk\selenium-trunk\common\src\web\proxy\page2.html file is vulnerable to link injection.

# PoC

```
<p><input type="button" id="forward" value="Forward" onclick="history.go(1)"/>
<script>
  var match = document.location.search.match(/next=(.*)/);
  var next = document.referrer || '';
  if (match && match.length == 2) {
    next = decodeURIComponent(match[1]);
  }

  if (next) {
    var link = document.createElement('a');
    link.innerText = 'Next!';
    link.textContent = 'Next!';
    link.id = 'next';
    link.href = next;
    document.body.appendChild(link);
  }
</script>



```
