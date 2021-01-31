# Description

`node-login` is a template for quickly building login systems on top of Node.js & MongoDB. The business logic which updates account details fails to verify if the provied email is associated with another account.

# Proof of Concept

1. Navigate to `/signup` and Create two accounts with data like below
    * Account 1 - username: victim, email: victim@test.com
    * Account 2 - username: hacker, email: hacker@test.com
2. Account creation functionality does not allows to create user with existing email.
   ![poc1](https://raw.githubusercontent.com/arjunshibu/files/main/node-login-poc/poc1.png)
3. Login to the hacker account
4. In the account update section, change the email field with victim email and submit the form.
   ![poc2](https://raw.githubusercontent.com/arjunshibu/files/main/node-login-poc/poc2.png)
5. Now both accounts are associated with victim's email.
6. Check MongoDB backend for confirmation
   ![poc2](https://raw.githubusercontent.com/arjunshibu/files/main/node-login-poc/poc3.png)

