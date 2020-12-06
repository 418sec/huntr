## :writing_hand: Description

`apexcharts` is vulnerable to Cross-Site Scripting (XSS).

## :male_detective: Proof of Concept

1. Install the package by following this instruction https://apexcharts.com/docs/installation/ or try the live sandbox here https://codepen.io/apexcharts/pen/xYqyYm
2. Edit `JS` and insert the XSS payload below in the `name` field
3. Payload: `'sales<img src=x onerror=alert(1)>'`
4. XSS payload will get executed.

## :boom: Impact

An attacker is able to execute malicious scripts.
