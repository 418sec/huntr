# Overview

`com.linkedin.azkaban:azkaban-common` is a workflow manager. This package is vulnerable to XML External Entity (XXE) Injection via `validator/XmlValidatorManager.java` and `user/XmlUserManager.java`.
