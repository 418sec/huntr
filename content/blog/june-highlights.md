---
title: "June huntr highlights - Reviews and Podcasts"
publishedAt: 2020-06-29
image: https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/EjrZMqSWbHcCicGt.jpg?w=880
author: the huntr Team
---

As the world starts to open up, we are still pushing along with our mission - to make it easy to contribute to open source, whilst empowering developers to think about security!

## huntr highlights 

It's become a tradition here at huntr to shout out some of the most impressive disclosures and fixes we have received over the month:

[PM2](https://github.com/Unitech/pm2) is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without the downtime, and to facilitate common system admin tasks. It is downloaded over 390,000 times per week and was vulnerable to Command Injection. [toufik-airane](https://github.com/toufik-airane) wrote a patch which has now been accepted by the original repo!

[electron-builder](https://github.com/electron-userland/electron-builder) is a complete solution to package and build an Electron, Proton Native app for macOS, Windows, and Linux. It is downloaded over 90,000 times every week and is depended upon by over 32,000 other repositories. It was vulnerable to Signature Validation Bypass and has now been fixed by the community. Check out the [GitHub Issue](https://github.com/418sec/electron-builder/pull/1) to read through [Mik317](https://github.com/Mik317)'s findings and the process he went through to fix it.

## Updates

### Review process

We have automated a lot of the review process, and expanded our dedicated team of sheriffs, meaning reviews are now being done throughout the week! With a few additional 'rules':

- There will be a 24-hour buffer on all bounties once the first review is complete.
- If multiple fixes are received we will choose the winner based on the following criteria:

  1. Accepted by repo
  2. Most robust fix
  3. Quickest fix

Thank you all for your feedback about our review process. We listened, we heard, and we hope this is the improvement you wanted to see - get in touch if you have any more suggestions.

## Podcast: Bug huntr

We now have a huntr [podcast](https://www.buzzsprout.com/1156538)! 🔥

Check it out for tips, tricks, and insider information about everything open source. It's a great place to hear other hackers' experiences, the tools they use, and how they developed their hacker mindset. It's available on our website, Spotify, and Apple music.

## huntr of the month 🦸‍♀️ 🦸‍♂️

And on that note, this month's huntr of the month is [Aditya Nath](https://github.com/adi928) - well done! 👏 👏

He has been contributing and engaging heavily with the community over the past month, and has been an integral part in deciding what we build next to support the platform! Check out how he did it in [EP002](https://www.huntr.dev/blog/podcast-stay-out-of-your-comfort-zone) of the podcast!

To say thank you, we have awarded him this month's gold huntr of the month badge and will be sending him a huntr hoody shortly! 🏆

As always, a huge thank you for the love and support - there are plenty more vulnerabilities to find, bounties to win, and badges to collect, so keep it coming!

_Until next time..._
