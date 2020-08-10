
# Description

dolibarr is a modern and easy to use web software to manage your business.
The error page is vulnerable to (self) XSS because of lack of escaping on $_SERVER['HTTP_USER_AGENT'] variable before printing it.

The flaw is in the **dol_print_error** function (in the **htdocs/core/lib/functions.lib.php** file)

# PoC

1. Log into your dolibarr instance
2. Change your browser user-agent by appending something like <script>alert(document.domain);</script>
3. Modify the URL in order to throw an error (for example: http://dolibarr/document.php?modulepart=.&attachment=0&file=dddd&&entity=10&&entity=1000&&entity=101&mainmenu=home)
4. XSS is fired

