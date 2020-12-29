---
title: "Abhiram V: my successful journey with huntr"
publishedAt: 2020-12-11
image: https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/xyITwsXsoXrBeSWj.jpg
author: Jamie Slome
---

In this article, we hear from one of our community members, Abhiram V - also referred to as Anon-Artist. He is the Founder of BufferSec and a Cyber Security Researcher at Wattlecorp Cyber Security Labs. Thank you to Abhiram for walking us through his journey on the platform and sharing his experience of collaboration, learning and making a real difference to open-source software.

If you also want to share your experiences on the platform with us, don't hesitate to get in touch. If you have any questions, feel free to contact us.

My fellow huntrs,
Hello 👋! I'm Abhiram V, a.k.a. Anon-Artist. I am a cyber security enthusiast, an ethical hacker and a part-time bug bounty hunter. I would like to thank the team at huntr for giving me the opportunity to write a blog article on my experiences with huntr.
Before I jump into my achievements on the platform, I want to start by telling you how this all started. I remember a time when I was fed up with getting many duplicates from major bug bounty platforms and public programs. I was exhausted with the lack of results and decided to take a break from the bug hunting world. Coincidentally, at the exact same time, I received a call from my friend Asjid Kalam who was already a community member on huntr. After spending time catching up, he introduced me to the platform and I felt motivated to get back into bug hunting once again!
On my first visit to huntr, I was not ready as a lot of the features on the platform utilised GitHub. Another one of my friends, Ajmal Aboobacker (a.k.a B3EF) who is also a bug bounty hunter on the platform, helped me and showed me the ropes when contributing to GitHub and huntr, alike. After this team collaboration, I did in fact see the disclosure explanation video which was surprisingly clear and easy to follow.
From that day on, I preferred disclosures over fixing as I loved the thrill of finding vulnerabilities in open source packages.

Anon-Artist

I started by reporting some "low-hanging" fruit within a few days of joining the plaform. I quickly familiarized myself with huntr and started to seek for critical vulnerabilities. At first, I found an application called cabot - an open source network monitoring application (written in Python). I proceeded to check the authentication process first, and found nothing surprising. So, I decided to move on and focus in on how the package worked fundamentally. After spending more than a hour understanding the "in's and out's" of the package, I tried to pushed myself and see if I could trigger some XSS (Cross-site Scriping) payloads. At first, I was using the admin account, but after a few minutes, I found a way to trigger a persistent XSS vulnerability. Although I was surprised with my finding, I still wanted to dig further to see if I could increase the criticality of the disclosure, so I didn't stop quite yet! After spending some time reflecting on the journey so far, I tried creating multiple users under the administration account and triggering XSS in one of the nodes - sending users to notify all users including the administration. My intuition was perfect. Now, from the user, I could exploit the entire network by triggering an XSS payload.

Disclosure in Cabot

It was a critical bug centered around privilege escalation. After finding this vulnerability, I applied for a CVE and requested that the exploit was added to exploitdb. Within a week, I got the approval! I was so happy to get my first CVE (CVE-2020-7734) and to top it all off, huntr gave me a bounty payment too.
It was all because of huntr and I always thank them.
Now, I spend my free time hunting for vulnerabilities in open source with huntr, and have also decided to fix vulnerabilities too. I believe with both of these hand-in-hand, I will improve myself and learning in open source security and bug hunting.

---

Before wrapping up, I would like to mention the community support from huntr. All of the contributors and sheriffs (reviewers) have been awesome and they always support us throughout our journey.

Finally and once again, I want to thank huntr so much for posting my blog article and for their continued support.

Anon-Artist, Abhiram V

References:
Blog
Profile
