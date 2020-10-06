# Description
Lack of RateLimiting in the login page of spree.
# Proof of Concept 
* clone the github repo 
* setted up spree platform to reproduce the vulnerability
* I used an intruder in BURP SUITE to test for rate limiting on the password field.
* It shows 200 OK for wrong information and if password matches BURP show a 302 FOUND status code.
* [POC] https://drive.google.com/file/d/1US5p7_cKWKKnMgY7VAzAQ7XWivYzpW-Q/view?usp=sharing
# Impact
The attacker is able to perform bruteforce attack to login into victim account.
