# Overview

django-crm is a Python CRM based on Django aimed to salesforce.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) via `/change-password-by-admin/`, `/api/settings/add/`, `/cases/create/`, `/change-password-by-admin/`, `/comment/add/`, `/documents/1/view/`, `/documents/create/`, `/opportunities/create/`, and `/login/`.
