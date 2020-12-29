huntrs - despite the whole world being stuck indoors, May has been an amazing month! We are continuing to build on the disclosure functionality, speeding up our review process, and working on some cool new features to bring to the site! Over this time, we've received cross-site scripting, command injection, and buffer overflow vulnerabilities to name a few. We also have an announcement to make this month - so read on to find out more!
huntr highlights 
When it comes down to it, the most important thing we want to provide is a platform that props up the amazing InfoSec community, so here are some highlights from the month.


TheGrandPew disclosed a BSS buffer overflow in the png parser of the package node-pngdefry. If an invalid png is used, it can lead to remote code execution. This is because the reader does not check if the size is invalid, resulting in an overflowed buffer on the BSS stack. With a CVSS scoring of 9.4, this vulnerability is critical and needs to be fixed ASAP. (Check the bounty out here)


Vineetpanday found and disclosed a path traversal via symlink in http-server - a package that is depended upon by over 138,000 other repositories. The vulnerability allows an attacker to read arbitrary system files that might contain system/user credentials and other sensitive information. With a symbolically linked file in the working directory, it is possible to read arbitrary files outside of the webroot directory - warranting a CVSS scoring of 7.5.


We are working on several new features that we hope will help build your reputation within the InfoSec community, so keep getting involved, and we will keep building!
Changes
Disclosure process 🛤️
From this month we have changed our disclosure process so that it is all open source. You can now submit your disclosures straight to the huntr repository. Simply:
Create a `README.md` with the vulnerability details, POC, and any other useful information.Create a `vulnerability.json` using the template provided on the huntr repo.Send your pull request.
We hope this process works better when it comes to disclosures, and if you have any ideas on how to improve it, get in touch.
Reward amount 💰
On top of that, we are increasing the disclosure payout from $10 to $25 with the criteria staying the same - we reward disclosures if:
The package has over 1000 downloads per monthThe CVSS score is at least 3A fix is not already available
If you find a vulnerability that doesn't fit the criteria, don't worry, we'll still reward you the credits as usual.
huntr of the month - hbkhan 🦸‍♀️ 🦸‍♂️ 
Every month, we will pick the huntr of the month, giving the most successful huntrs the recognition they deserve.


Without further ado, the huntr of the month is - hbkhan - well done! 👏 👏 


hbkhan has gone above and beyond in helping us to support the community. He has identified issues in bounties, bugs in the website, and has helped us out massively in several other areas.


To say thank you, we have awarded him this month's gold huntr of the month badge and will be sending him a huntr hoody shortly! 🏆 


As always, a huge thank you for the love and support - there are plenty more vulnerabilities to find, bounties to win, and badges to collect, so keep it coming! 


Until next time...