# Description

`online-invoicing-system` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Go to https://bigprof.com/appgini/applications/online-invoicing-system
2. click on Launch private demo on Gitpod https://gitpod.io/#https://github.com/bigprof-software/online-invoicing-system
3. login using appgini in all the fields and click on 3rd option "go to admin homepage...."
4. select total groups and click on edit button for anonymous
5. Edit the description with `aaaaa"<ScRiPt>alert('XSS')</ScRiPt>` and save
6. XSS will be triggered. And when u visit the grops.
