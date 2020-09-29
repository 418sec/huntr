# Overview

`react-native-webview` is a React Native WebView component for iOS,Android, MacOS, and Windows.

This package is vulnerable to Cross-site Scripting (XSS). A universal cross-site scripting (XSS) vulnerability has been identified in the Android WebView system component, which allows cross-origin iframes to execute arbitrary JavaScript in the top-level document.

This vulnerability affects React Native apps which use a `react-native-webview` that allows navigation to arbitrary URLs, and when that app runs on systems with an Android WebView version prior to `83.0.4103.106`.
