# :dizzy: Description:
- Shupload Is a Personal image hosting and sharing by the power of HTTP, Go, and an optional bit of JavaScript. Due To Lack Of Input Validation. Remote Attackers Are Able To Perform DDoS Attacks On The Shupload Server Using Large Filenames On The Image Uploads. That Increases The CPU Usage While Interacting With The Data And Requesting It From The DataBase And Slow The Server From Running Again Due To a Huge Loop Of Loading Data From The Database.

# :ok_hand: Steps To Reproduce:
- Run Your Shupload Instance After Building It Using `./shupload`
- Access Your Public IP From The Browser With Port: `8088`
- Go To Image Upload Function. Then Upload a Simple Image Then Intercept The Request.
- Change The Filename Into Something Really Huge. Then Send The Filename Into The Database.
- Open `top` On Your Machine. And See The CPU Usage For `./shupload` Getting Increases
- After Posting a Multiple Large Filenames Into The Database. Start `./shupload` Over Again.
- The Server Won't Work Until Loading The Large Data From The Database.
- That Can Keep The Server In Loading Loop In Case a Successful Attack With Large Values Is Applied.

# :boom: Proof Of Concept:
- Creating Such an Attack Will Take Time To Send These Requests With This Large Data. Just Try It Locally With Your Own Instance By Following The Steps To Reproduce Steps. But BTW Here's a Screen Shot Proving That The Server Does Accept Large Values Of Data On The Filename.

![Image](https://i.imgur.com/zkvvyPf.png)

Cheers
