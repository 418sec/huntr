# Description

I would like to report XSS vulnerability in pandao/editor.md
Implemented Html tag filtering doesn't work for self clossing tags, leading to posible code injection on this elements

# Module
module name: Editor.md
version: all versions

# Module Description

Editor.md : The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & Marked.

# Weekly Downloads

1,417

# Vulnerability Description

XSS in editor.md is avoided by using filterHTMLTags which uses a RegExp to replace possible dangerous content, unfortunetly the RegExp doesn't handle self clossing tags, making it possible to execute code


# POC

Insert in editor a self clossing element with event to execute code

  1. Download editor.md 
    `git clone https://github.com/pandao/editor.md`
  2. Go into directory
    `cd editor.md` 
  3. Make the content available with any web server
    `php -S localhost:8080`
  4. open http://localhost:8080/examples/html-tags-decode.html
  5. Filter code execution by clicking on Filter style,script,iframe|onclick,title,onmouseover,onmouseout,style
     (No code should be executed with this Filter)
  2. Insert element with payload usig the editor: 
     `<img src="https://picsum.photos/200" style="position:fixed;left:0;top:0;width:10000px;height:10000px;" style="z-index:3000" onload="alert('img execution...')"/>`

# Impact
This could have enabled an attacker to execute code remotely if the content of the editor is saved and then retrieved by some other user
