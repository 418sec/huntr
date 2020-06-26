# Overview

Cloud Foundry CLI

> Cloud Foundry CLI is the official command line client for Cloud Foundry.

Affected versions of Cloud Foundry CLI are vulnerable to Improper Access Control. Unnecessarily permissive modes are set to config.json file and .cf directory.


# Impact

Configuration files are being assigned unnecessarily permissive modes, potentially enabling privilege escalation, and also those files contain sensitive information ( such tokens, etc.)