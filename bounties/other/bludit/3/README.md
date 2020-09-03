# Description

The `bludit` software allows `admins` to set `social buttons` which are used to redirect people to the social accounts of the company who's using `bludit`.
However, there isn't any `url validation` in place, which makes possible crafting arbitrary `a` HTML tags which could lead to `stored XSS` and similar issues.

Since the `users` can have different privileges and `admin` can be more than one, a `malicious admin` could craft the `social button` and ask to another admin to check if it worked correctly, while `XSS` occurs and `sensitive information` or `cookies` are stealed using the injected `JS`.

# PoC

1. Download `bludit`
2. Start a `server` on the root of the project (`php -S 0.0.0.0:8001`)
3. Go on http://localhost:8001/ and proceed with the installation
4. Let's have 2 accounts (`A` == `admin attacker` and `V` == `admin victim`)
5. `A` goes on http://0.0.0.0:8001/admin/settings and changes the `social buttons` to `javascript:alert(domain)` and clicks `Save`
6. `V` is alerted by `A` about the new `social buttons` and clicks on them
7. `XSS` is popped

