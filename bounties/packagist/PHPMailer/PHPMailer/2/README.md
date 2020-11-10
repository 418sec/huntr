## Description
PHPMailer is a PHP Library for sending email.

This package is vulnerable to Cross-site-scripting. when the user crafted a payload on the message, the package will not perform any filtering. hence, it will send the message to the email address.

## POC
1. Create a project dir in your htdocs folder
2. Install the package using composer. [here](https://github.com/PHPMailer/PHPMailer#installation--loading)
3. Create a test.php file on your project root dir
4. Copy and paste the sample code from the package. [here](https://github.com/PHPMailer/PHPMailer#a-simple-example)
5. Configure the SMTP credentials
6. On the `body` property, insert an xss payload. for ex, `Hello, john doe! <script>alert(document.domain)></script>`
7. Open terminal in your project root dir, then run command `php test.php`
8. Check your inbox for the email as source
9. Scroll at the bottom of the page to see that the payload is not filtered

## Disadvantages
1. Most Email providers will filtered this out before rendering the email on the page

## Advantages
1. On Most CRM Applications, it has email parser script. so if the app fails to filter it, the payload will be triggered
