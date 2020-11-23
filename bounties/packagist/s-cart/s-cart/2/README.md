# Description

`s-cart` is a free e-commerce website project for businesses, built on the Laravel framework. this package is vulnerable to `reflected Cross-Site Scripting (XSS)`.

https://github.com/s-cart/s-cart
https://s-cart.org/about.html

# Steps To Reproduce-:  

1) install https://github.com/s-cart/s-cart locally or https://demo.s-cart.org/ for demo
2) the search function in admin dashboard is vulnerable for XSS 
https://demo.s-cart.org/sc_admin/order?keyword=%22%3E%3Cscript%3Ealert%28document.cookie%29%3C%2Fscript%3E


# POC
  [gdrive](https://drive.google.com/file/d/1Neo0a9saVuE1rjw0PONom08o0Lf3bvPL/view?usp=sharing)
