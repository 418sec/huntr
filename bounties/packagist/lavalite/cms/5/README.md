# :bug: Description

Any `unauthenticated user` can `signup` with a `malicious name` which is then shown in the http://127.0.0.1:8000/admin/user/client page.
This makes possible `stored-XSS` without having any access to the functionalities except the `signup` (publicly available), making possible `fully unauth account takeover`.

# :fire: PoC

1. Install the `Lavalite` CMS
2. Attacker goes on http://127.0.0.1:8000/client/register
3. Attacker fills the `signup` form and puts as name the following: `test"><img/src="x"/onerror=alert(document.cookie)>` or a `blind-XSS` payload
4. Admin (victim) goes on http://127.0.0.1:8000/admin/user/client to check how many new people subscribed
5. XSS triggered and `cookies` --> `account takeover`
