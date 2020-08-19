# Overview

`org.xbib.groovy:groovy-ldap` is a library that contains LDAP extensions for Groovy, this package are vulnerable to LDAP Injection.

It is possible to conduct LDAP entry injection attacks for all search methods due to the setting `returnObjFlag` being true within `main/java/org/apache/directory/groovyldap/LDAP.java`.
