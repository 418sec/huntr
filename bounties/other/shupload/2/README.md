# :dizzy: Description:
- Shupload Is a Personal image hosting and sharing by the power of HTTP, Go, and an optional bit of JavaScript. Due To Lack Of Image Size Validation. Remote Attackers Are Able To Store Big Images Inside The Database Folder That Will Fill Up The Space And The Hall System Won't Work Anymore Since There's No Space Left To Right On. Could Easly Exploited Using Bash Loop For 15 Minutes To Fill Up To 1000GB+ Of Data That Can Make Any Machine Out-Of-Space.

# :ok_hand: Steps To Reproduce:
- Install Your Shupload Instance, Then Run It From The Binary.
- Download a Big Image. In My Case It's 90+mb Image.
- Use This cURL Command To Upload The Image: `curl -X POST -H "Content-Type: multipart/form-data" -F "file=@{IMAGE-FILENAME}" http://{HOST:PORT}/`
- Keep Executing This Command Multiple Times Then See Your `db` Folder Space Using `du -sh db/`
- You Will Find That It's Space Is Really Big Depending On The Number Of Times You Executed The Command.

# :boom: Proof Of Concept:
- Just Follow Steps To Reproduce On Your Own Insatance. I Won't Perform a DoS Attack On My Own Instance While It's Used To Serve My Server.

Cheers
