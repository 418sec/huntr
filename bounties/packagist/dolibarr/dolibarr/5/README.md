# Description
The application is vulnerable to html injection in password reset functionality.

# PoC
![Image of POC](https://github.com/kajalNair/huntr/blob/html_injection/bounties/packagist/dolibarr/dolibarr/5/images/test.png)

```

// Validate new password
if ($action == 'validatenewpassword' && $username && $passwordhash)
{
    $edituser = new User($db);
    $result = $edituser->fetch('', $_GET["username"]);
    if ($result < 0)
    {
        $message = '<div class="error">'.$langs->trans("ErrorLoginDoesNotExists", $username).'</div>';
    } else {
        if (dol_verifyHash($edituser->pass_temp, $passwordhash))
        
        
  ```
