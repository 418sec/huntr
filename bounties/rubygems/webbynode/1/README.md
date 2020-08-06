# Overview

`webbynode` is a Webbynode Deployment Gem. This Gem contains a vulnerability in `notify.rb` that is triggered when handling a specially crafted `growlnotify` message. This can allow a context-dependent attacker to execute arbitrary commands.
