## :writing_hand: Description

`react-apexcharts` is vulnerable to Cross-Site Scripting (XSS).

## :male_detective: Proof of Concept

1. Install the package by following this instruction https://github.com/apexcharts/react-apexcharts#installing-via-npm or try the live sandbox here https://codesandbox.io/s/mzzq3yqjqj
2. Edit `App.js` and insert the XSS payload below in the `name` or `categories` fields
3. Payload: `"series-1<img src=x onerror=alert(1)>"`
4. XSS payload will get executed.

## :boom: Impact

An attacker is able to execute malicious scripts.

