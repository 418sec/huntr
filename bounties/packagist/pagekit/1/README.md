# Overview
pagekit/pagekit is a modular and lightweight CMS built with Symfony components and Vue.js.
Affected versions of this package are vulnerable to User Enumeration.
It gives a different response depending on whether the e-mail address of a valid user account is entered, which might make it easier for attackers to enumerate accounts.