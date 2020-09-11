# Description

The `HiChat` application is a simple `chat` for `small teams` which is based on a small `server` which helps to `track` messages sent by various users.
The project presents a `stored XSS` issue which could lead to `session stealing` or `HTML/JS injection` in a permanent way, until the victim leaves the `chat room`.

# PoC

1. Download the project locally
2. Run `npm i`
3. Run `node server`
4. Go on http://localhost:3000
5. Join the `chat room` and set your username as `test"><img/src="x"/onerror="alert(document.domain)">`
6. Open an anonymous tab and join the chatroom as another user (simulating the victim who joins the same `chat room` of the `attacker`)
7. When the `attacker` sends any message, the `username` is insecurely reflected and JS injected
8. XSS popped !!! 

