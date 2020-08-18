# Description

GetSimple CMS is a flatfile CMS written in PHP.The Latest release of the version is affected with a Cross Site Scripting due to unsanitized user Input.The Issue is affecting the
/admin directory.

# POC

1:This is Link to Download the CMS [Here](https://github.com/GetSimpleCMS/GetSimpleCMS)  
2:Extract the zipfile to an Apache Server  
3:Under the /admin/ Directory there is a Setup.php file. Navigate to that file eg: localhost/GetSimpleCMS-master/admin/setup.php  
4:You will end up with a "GetSimple Installation"Form.Now enter your username with an XSS payload like <script>alert(1)</script>  
5:Fill the data and Submit the form

The file contains a vulnerable form

```
<form action="<?php myself(); ?>" class="entersubmit" method="post" accept-charset="utf-8" >
				<input name="siteurl" type="hidden" value="<?php echo $fullpath; ?>" />
				<input name="lang" type="hidden" value="<?php echo $LANG; ?>" />
				<p><label for="sitename" ><?php i18n('LABEL_WEBSITE'); ?>:</label><input class="text" id="sitename" name="sitename" type="text" value="<?php if(isset($_POST['sitename'])) { echo $_POST['sitename']; } ?>" /></p>
				<p><label for="user" ><?php i18n('LABEL_USERNAME'); ?>:</label><input class="text" name="user" id="user" type="text" value="<?php if(isset($_POST['user'])) { echo $_POST['user']; } ?>" /></p>
				<p><label for="email" ><?php i18n('LABEL_EMAIL'); ?>:</label><input class="text" name="email" id="email" type="email" value="<?php if(isset($_POST['email'])) { echo $_POST['email']; } ?>" /></p>
				<p><input class="submit" type="submit" name="submitted" value="<?php i18n('LABEL_INSTALL'); ?>" /></p>
</form>
```

Here none of the User Input is sanitized.If $_POST['user'] is set then it echos the UserInput. I think adding htmlspecialchars() to the $\_POST['username'] may solve the issue.
