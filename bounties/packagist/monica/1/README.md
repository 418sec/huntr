# Description
HTML codes can be entered and successfully run in the journal session of Monica, which allows an attacker to trigger XSS query's like ```<svg/onload=alert("StoredXSS")>``` causing a persistant stored XSS in the journal session. 
files at monica/2.
<3

# POC
1. setup monica using docker or other means like their [online](https://app.monicahq.com) test platform. 
    * source : [LINK](https://github.com/monicahq/monica.git)
2. go to the journal part.
3. try payload ```<svg/onload=alert("blah!!,blah!!!,blah!!!!")>```

# Fix Suggestion 
* Sanitize the input / escape the xss charecters or else escape the user inputs from html tags, i think it works.
