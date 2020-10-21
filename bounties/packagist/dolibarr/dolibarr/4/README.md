# Description
The application is vulnerable to html injection in password reset functionality.

# PoC
![Image of POC](https://github.com/kajalNair/huntr/blob/html_injection/bounties/packagist/dolibarr/dolibarr/5/images/test.png)

```

<a href="javascript:alert(1)">CLICK ME</a>
        
        
  ```
