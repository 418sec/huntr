# Overview

`commit-msg` is a customizable git commit message parser and validator written in Node.js. It validates a given string based on best practices and can be used as a git hook, command line tool and/or directly through the API.

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.