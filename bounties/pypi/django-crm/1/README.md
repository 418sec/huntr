[django-crm](https://github.com/MicroPyramid/Django-CRM) is a Python CRM based on Django aimed to salesforce.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) via `/change-password-by-admin/`,  `/api/settings/add/`,  `/cases/create/`,  `/change-password-by-admin/`,  `/comment/add/`,  `/documents/1/view/`,  `/documents/create/`,  `/opportunities/create/`, and  `/login/`.
## References
-   [NVD](https://nvd.nist.gov/vuln/detail/CVE-2019-11457)
-   [Seclists Full Disclosure](http://seclists.org/fulldisclosure/2019/Aug/30)
-   [Security Advisory](https://www.netsparker.com/web-applications-advisories/ns-19-013-csrf-vulnerabilities-in-django-crm/)