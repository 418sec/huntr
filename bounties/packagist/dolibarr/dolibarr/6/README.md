### Description
The application is vulnerable to username enumeration in password reset functionality.

### PoC
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
