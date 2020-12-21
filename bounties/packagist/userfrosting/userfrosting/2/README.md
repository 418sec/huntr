# Description
Encountered Session Fixation bug in userfrosting/UserFrosting repo. As per certain CVEs present Session Fixation is a medium to High Severity bug. 
# Proof of Concept 
1. setup UserFrosting platform to reproduce the vulnerability
2. open an account in multiple browsers like 2 different private modes of chrome and firefox.
3. login the same account in both browsers.
4. change the password of the account in one browser, meanwhile, try to reload the same account in the other browser.
5. we can see the old session still works and that there is no new session created for the change of password.
# Impact
An attacker is able to maintain access with old sessions even if the security of the account is updated.