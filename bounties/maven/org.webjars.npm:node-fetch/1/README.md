# Overview

`org.webjars.npm:node-fetch` is a light-weight module that brings window.fetch to node.js

This package is vulnerable to Denial of Service. Node Fetch did not honor the size option after following a redirect, which means that when a content size was over the limit, a FetchError would never get thrown and the process would end without failure.
