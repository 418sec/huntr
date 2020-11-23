# Description

`Arastta` is a Solid, Free, Open Source, Community Driven eCommerce this package is vulnerable to `Reflected Cross-Site Scripting (XSS)`.

https://github.com/arastta/arastta

# Steps To Reproduce-:  

1) install https://github.com/arastta/arastta locally or https://demo.arastta.org use demo
2) all url endpoints are vulnerable for xss eg: `/index.php"><script>alert("test")</script>`

# POC
  [gdrive](https://drive.google.com/file/d/1plUGY8Hp7L1SIL91XgZNuvu4cN7u0oWq/view?usp=sharing)
