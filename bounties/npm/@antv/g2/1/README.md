# Description 

`@antv/g2` is vulnerable to `Cross-Site Scripting (XSS)`.

# Proof of Concept

1. Install the package with `npm i @antv/g2`or try the live demo here https://g2.antv.vision/en/examples/case/pie#pie3
2. Edit any of the `type` field and add the payload `<img src=x onerror=alert(1)>`
3. XSS payload will get executed.
![poc](https://raw.githubusercontent.com/arjunshibu/files/main/g2-poc.PNG)

# Impact

An attacker is able to execute malicious JavaScript.
