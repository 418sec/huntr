# Description
Encountered Lack of RateLimiting in the login page of userfrosting/UserFrosting repo.
# Proof of Concept 
* clone the github repo and setup UserFrosting platform to reproduce the vulnerability
* I used an intruder in BURP SUITE to test for rate limiting on the password field.
* While rate limiting has not been triggered, then it shows 403 Forbidden error.If password matches BURP show a 200 OK.
* [POC of request used] (https://cdn.discordapp.com/attachments/749019614352244777/751009270656401468/Request_used.png)
* [POC of exploitation] (https://cdn.discordapp.com/attachments/749019614352244777/751009254533627944/POC_of_lack_of_ratelimiting.png)
# Impact
The attacker is able to perform bruteforce attack to login into victim account.