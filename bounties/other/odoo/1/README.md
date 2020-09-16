# Overview
Account takeover using Blind XSS in Survey application.
# Proof of Concept 
1. setup odoo to reproduce the vulnerability
2. create an account and navigate to Apps 
3. Install Survey and create new survey
4. Give a survey title and add a Question and go to the option
5. Use constraint Mandatory answer and put Blind XSS payload on Error Message
6. save and click Test. Blind XSS triggered and attacker gets the session.
7. To exploit this widely to takeover any account use share option and share via email and use login required and in  accessmode use Anyone with the link 
I used xsshunter.com platform for creating payload.