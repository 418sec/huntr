---
title: "September huntr highlights: huntrs go hard"
publishedAt: 2020-09-30
image: https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/xHGvjoocpMJsifeK.jpg?w=880
author: the huntr Team
---

You continue to surprise us, smashing all of our predictions out the water, doubling your contributions to open source, and continuing to have a lasting impression on its security.

## huntr Highlights

[ffmpeg-normalize](https://github.com/slhck/ffmpeg-normalize) was vulnerable to a Remote Code Execution vulnerability. [Asjid Kalam](https://www.huntr.dev/users/asjidkalam) realised that the use of the `child_process` function `exec()` is highly discouraged if you accept user input and don't sanitize/escape them. He fixed this by replacing it with `execFile()` which mitigates any possible Command Injections as it accepts input as arrays.

[The Patch >>](https://github.com/peterforgacs/ffmpeg-normalize/pull/161)

[d3m0n-r00t](https://www.huntr.dev/users/d3m0n-r00t) disclosed a medium risk prototype pollution vulnerability in the package [deep-get-set](https://github.com/acstll/deep-get-set) (which has been downloaded over **170,000** times) it was later fixed by [VitorLuizC](https://www.huntr.dev/users/VitorLuizC) who created an isSafeKey that receives the Key and returns a boolean value to indicate if it is safe to get.

[Take a look >>](https://www.huntr.dev/bounties/1-npm-deep-get-set)

## Updates

### New bounty detail page

The bounty detail page has a new paint job, giving you even more recognition, and making it easier for you to navigate around each other's submissions and profiles.

![New bounty detail page](https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/NdpaGbEktWfFCUtv.png)

[Take a look around >>](https://huntr.dev/)

## Podcast: Bug huntr

[EP007](https://www.huntr.dev/blog/podcast-it-s-about-the-journey-not-the-destination)

[Adam Nygate](https://www.linkedin.com/in/adam-nygate/?originalSubdomain=uk) (A-dizz) is the CEO of huntr, and the brain behind the idea. He started in development at a young age when he learnt how to write hacks for COD zombies, and since then has worked around the world as a technologist.

It's an episode full of spoilers, so listen in and find out what is coming next on huntr.dev!

**Bug huntr is taking a break - we will be back soon!**

## huntr of the month 🦸‍♀️ 🦸‍♂️

This month's huntr of the month is [Alejandro Romero](https://www.huntr.dev/users/alromh87) - well done! 👏 👏

With 2 disclosures and 38 fixes, he has made his way up the leaderboard, and is now 4th in the world on huntr! Thank you for helping protect open source, we have awarded you this month's gold huntr of the month badge and will be getting a huntr hoody sent to you shortly! 🏆

A huge thank you to all of you for helping protect open source, we still have a long way to go, but we are excited to continue taking on this mission together!

_Until next time..._
