**#Description**

https://aqueous-castle-60039.herokuapp.com/ is vulnerable to bruteforce attack in login procedure which makes it prone to brute force attacks and if successfully exploited an attacker can compromise account of victims

**#Proof of Concept**

go to https://aqueous-castle-60039.herokuapp.com/

1. if you don't have account then register 
2. enter your registered mail and any random string in password field 
3. intercept that request with burp suite and then send that request to intruder
4. in intruder ,select the value of password field , pick up a wordlist and start bruteforcing
5. you will encounter no rate limit and if a password is matched , you can sort by length and find out which one is correct!
