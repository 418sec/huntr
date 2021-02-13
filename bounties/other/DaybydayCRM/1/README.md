# Description

`DaybydayCRM` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. login to https://app.daybydaycrm.com/
2. Create new user/task/project/lead using the tabs in leftside
3. Insert payload in title:  `aaaaa"<ScRiPt>alert('XSS')</ScRiPt>` and create
4. XSS will be triggered. And when u visit the all users/leads/projects XSS will be triggered everytime.
