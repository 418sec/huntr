# Description

`openfire-clientControl-plugin` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Download openfire and install https://www.igniterealtime.org/downloads/
2. Run the server http://localhost:9090/index.jsp
3. Click on "Plugins" http://localhost:9090/plugin-admin.jsp and install the "client Control" plugin.
4. Click on  "Server" -> "Client Management" -> "Spark version" http://127.0.0.1:9090/plugins/clientcontrol/spark-form.jsp
5. Upload a dummy file using Choose file in Upload Spark Client and "Uplaod Spark"
6. Insert payload in Optional message:  `</TextArea>"<ScRiPt>alert('XSS')</ScRiPt>` and click on update spark versions
7. XSS will be triggered. And when u click on Spark version tab XSS will be triggered everytime.
