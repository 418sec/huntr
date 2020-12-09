## :writing_hand: Description

`ApostropheCMS` is a content management system (CMS) for Node.js. It supports in-context editing, schema-driven content types, flexible widgets and a great deal more. This module contains everything necessary to build a website with ApostropheCMS. This package lacks rate-limiting, which allows an attacker to brute-force admin login credentials.

## :male_detective: Proof of Concept

1. Setup a demo project using `ApostropheCMS` by following these instructions https://docs.apostrophecms.org/getting-started/setting-up-your-environment.html
```
sudo npm i -g apostrophe-cli
apos create-project test-project
cd test-project
npm i
node app.js apostrophe-users:add admin admin
node app.js 
```
2. Navigate to `http://localhost:3000/login` and capture the POST request in Burp
3. Use intruder and brute-force password
![poc](https://raw.githubusercontent.com/arjunshibu/files/main/apostrophe-poc.png)

## :boom: Impact

An attacker is able to perfrom brute-force attack and find admin credentials.
