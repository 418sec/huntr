## :writing_hand: Description

`ng-apexcharts` is vulnerable to Cross-Site Scripting (XSS).

## :male_detective: Proof of Concept

1. Install the package by following this instruction https://github.com/apexcharts/ng-apexcharts#download-and-installation or try the live sandbox here https://codesandbox.io/s/apx-column-datalabels-ckqp6
2. Edit `src/app/app.component.ts and insert the XSS payload below in the `categories` or `name` fields
3. Payload: `"Inflation<img src=x onerror=alert(1)>"`
4. XSS payload will get executed.

## :boom: Impact

An attacker is able to execute malicious scripts.
