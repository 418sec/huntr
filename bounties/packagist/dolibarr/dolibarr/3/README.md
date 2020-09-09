## Description
This package is vulnerable to Cross-site Scripting (XSS). The module renders user controllable value in the browser. In "card-rec.php" file, user controllable value coming from "$_POST["titre"] is directly appended to input field which will reflect back user provided string. An Attacker can leverage this parameter to execute javascript in the browser leading to Cross-Site Scripting attack.

## PoC

```
print '<table class="border centpercent">';
		$object->fetch_thirdparty();
		// Title
		print '<tr><td class="titlefieldcreate fieldrequired">'.$langs->trans("Title").'</td><td>';
		print '<input class="flat quatrevingtpercent" type="text" name="titre" value="'.$_POST["titre"].'">';
		print '</td></tr>';
```
