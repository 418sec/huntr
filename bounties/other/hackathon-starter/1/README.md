# Description

`hackathon-starter` is a boilerplate for Node.js web applications. It lacks rate-limiting, which allows an attacker to brute-force login credentials and mass account creation

# Proof of Concept

# Login Brute-Force

1. Install the package by following these ![instructions](https://github.com/sahat/hackathon-starter#getting-started) or try the live demo https://hackathon-starter.walcony.com
2. Navigate to `/login` and send the POST request to Burp Intruder
3. Use Grep Match option and add string `Found. Redirecting to <a href="/login">/login</a>`
4. The succeeded payload will redirect to `/` instead of `/login`                                                
  https://raw.githubusercontent.com/arjunshibu/files/main/hackathon-starter-poc/poc1.png                                            
  https://raw.githubusercontent.com/arjunshibu/files/main/hackathon-starter-poc/poc2.png                                            
  https://raw.githubusercontent.com/arjunshibu/files/main/hackathon-starter-poc/poc3.png                                            
  
# Mass Account Creation

1. Navigate to `/signup` and send the POST request to Burp Intruder
2. I used numbers as payloads
3. Use Grep Match option and add the string `Found. Redirecting to <a href="/signup">/signup</a>`
4. All succeeded payloads will redirect to `/` and to `/signup` if there is already a user                                                      
  https://raw.githubusercontent.com/arjunshibu/files/main/hackathon-starter-poc/poc4.png                                                       
  https://raw.githubusercontent.com/arjunshibu/files/main/hackathon-starter-poc/poc5.png
