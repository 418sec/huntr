# Overview

ansi2html does not control the length of the input it processes and uses regular expressions to parse it. As a result, it is susceptible to a Regular expression Denial of Service (ReDoS) vulnerabilities, rendering an application unavailable if a long or complex input is passed in.
