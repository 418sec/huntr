# Description
Username Enumeration in traduora.
# Proof of Concept 
1. setup traduora to reproduce the vulnerability 
2. go to sign in page http://localhost:8080/login
3. Append non registered user email and password it shows Error,resource not found 
4. when Appending correct username and fake password it shows Error,unauthorized
Using this way usernames can be enumerated
https://drive.google.com/file/d/1j3DCG7SteEMv_0CBROHB2nkyM4l2aNyZ/view?usp=sharing
https://drive.google.com/file/d/11fwC41hkHE9JjedyOWNH42wkVU4THQh3/view?usp=sharing
# Impact
Able to Enumerate user email which is the username in sign in page 
