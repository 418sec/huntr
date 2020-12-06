## :writing_hand: Description

`vue-apexcharts` is vulnerable to Cross-Site Scripting (XSS).

## :male_detective: Proof of Concept

1. Install the package by following this instruction https://apexcharts.com/docs/vue-charts/ or try the live sandbox here https://codesandbox.io/s/o7339qql3z
2. Edit `src/components/Chart.component.vue` and insert the XSS payload below in the `categories` or `name` fields
3. Payload: `'series-1<img src=x onerror=alert(1)>'`
4. XSS payload will get executed.

## :boom: Impact

An attacker is able to execute malicious scripts.
