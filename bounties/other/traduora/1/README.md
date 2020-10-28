# Description
Massive account creation chained with Session fixation in traduora.
# Proof of Concept 
1. setup traduora to reproduce the vulnerability 
2. go to create an account page http://localhost:8080/signup
3. Append a Name, Email Address and Password and capture the request with Burpsuite 
4. Send the request to intruder and provide the necessary option and attack
For testing I used battering ram mode and created admin1 to admin50 with email admin1@hunt.com to admin50@hunt.com
* https://drive.google.com/file/d/1QzjQmYBBOSUB4G5pEtI34tqQEd2meKlo/view?usp=sharing
Traduora is also vulnerable to session fixation issue due to that once attacker registerd the accounts after that victim opens his account with new password the seesion of the attacker will not expired.
# Impact
Able to Create multiple accounts with a single request to annoy legit users that user with this email already exist and attacker is able to maintain access with old sessions even if the security of the account is updated by the victim.
