# Overview

`sync-exec` is an fs.execSync replacement for node <0.12.

This package uses `tmp` directories in an insecure way. The file created will allways return `true`, regardess if the directory already exists or belongs to another user. Any user on the server may read the contents of this `tmp` file and may expose confidential information to an attacker.
