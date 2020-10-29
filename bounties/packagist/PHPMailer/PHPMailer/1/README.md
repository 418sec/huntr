### Description
PHPMailer is a PHP Library for sending email.

This package is vulnerable to Local File Disclosure. The `addAttachment` method allows user input for a file path. Hence, attacker has full control of the path that it can bruteforce its way to even attach a file that belongs to the OS. for example, in Linux, it can even access `/etc/passwd` file.

### POC
1. Create a project dir in your htdocs folder
2. Install the package using composer. [here](https://github.com/PHPMailer/PHPMailer#installation--loading)
3. Create a test.php file on your project root dir
4. Copy and paste the sample code from the package. [here](https://github.com/PHPMailer/PHPMailer#a-simple-example)
5. Configure the SMTP credentials
6. On method `addAttachment`, add any file. for ex, in linux, use '/etc/passwd' as the method parameter
7. Open terminal in your project root dir, then run command `php test.php`
8. Check your inbox for the email
9. Now, you can download the attached file
