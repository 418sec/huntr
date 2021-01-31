# Description

The `ChatCord` application allows people to use a `instant messaging` chat to exchanges messages and is based on a `js server`.
The `chat` however presents a `stored XSS` which is due to `time` field not validated correctly.

The `username` and `message` field have been fixed by another PR merged inside the original repo (https://github.com/bradtraversy/chatcord/pull/17), however the `time` field hasn't been sanitized at all :smile:

# PoC

1. Download the project (or use Repl.it)
2. Run `npm i`
3. Run `npm run dev`
4. Go on http://localhost:3000 or on the Repl instance created
5. Go on `https://<instance:port>/chat.html?username=test&room=JavaScript`
6. Start Burp
7. Send a new message and intercept the WS request
8. Modify the `time` parameter in `><img/src=\"x\"/onerror=alert(1)>`
9. XSS triggered :+1:
