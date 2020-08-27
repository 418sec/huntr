# :bug: Description

The `ChatCord` application allows people to use a `instant messaging` chat to exchanges messages and is based on a `js server`.
The `chat` however presents both `stored XSS` and `reflected XSS` due to the insecure handling of the `username` field, which isn't sanbitized at all and leads to the 2 vulnerability previously mentioned.

# :fire: PoC

1. Download the project (or use Repl.it)
2. Run `npm i`
3. Run `npm run dev`
4. Go on http://localhost:3000 or on the Repl instance created
5. Go on `https://<instance:port>/chat.html?username=test%22%3E%3Cimg%2Fsrc%3D%22x%22%2Fonerror%3Dalert%281%29%3E&room=JavaScript`
6. XSS popped !!!
7. Join the same chat room using a different `tab` (anonymous tab) in order to impersonate the victim
8. Send a message from the `attacker`
9. Victim pops the XSS !!!
