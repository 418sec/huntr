## Overview 

dolibarr is a modern and easy to use web software to manage your business.

## Description

This package is vulnerable to Cross-site Scripting (XSS). The module renders user controllable value in the browser. In "card-rec.php" file, user controllable value coming from "$_POST["titre"] is directly appended to input field which will reflect back user provided string. An Attacker can leverage this parameter to execute javascript in the browser leading to Cross-Site Scripting attack.
