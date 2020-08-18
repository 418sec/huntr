# Description

The `SonarQube` software is vulnerable against a `open redirect` issue which happens inside the `login auth flow`, because of the `?return_to` parameter which is checked only in part, leading to the aforementioned vulnerability.
The `bypass` consists in the usage of a `null char` which could be used in `encoded ways` ( `%09` ) and leads to bypass of the `//` substring sanitization.

# PoC

1. Install the SonarQube software through the website/github repo
2. Start it from the `bin` directory using `./sonar.sh start`
3. Go on http://localhost:9000/sessions/new?return_to=%2F%09%2Fevil.com and login with the default credentials (`admin:admin`)
4. You'll be redirected on the http://evil.com website
