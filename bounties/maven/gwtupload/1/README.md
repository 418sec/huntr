# Overview
[com.googlecode.gwtupload:gwtupload](https://github.com/manolo/gwtupload) is a library for uploading files to web servers, showing a progress bar with real information about the process (file size, bytes transferred, etc).

Affected versions of this package are vulnerable to Denial of Service (DoS). server/UploadServlet.java (the servlet for handling file upload) accepts a delay parameter that causes a thread to sleep. It can be abused to cause all of a server's threads to sleep, leading to denial of service.