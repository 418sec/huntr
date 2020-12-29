---
title: "Abhiram V: my successful journey with huntr"
publishedAt: 2020-12-11
image: https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/xyITwsXsoXrBeSWj.jpg
author: Jamie Slome
---

In this article, we hear from one of our community members, Abhiram V - also referred to as [Anon-Artist](https://www.huntr.dev/users/Anon-Artist). He is the Founder of BufferSec and a Cyber Security Researcher at Wattlecorp Cyber Security Labs. Thank you to Abhiram for walking us through his journey on the platform and sharing his experience of collaboration, learning and making a real difference to open-source software.

If you also want to share your experiences on the platform with us, don't hesitate to get in touch. If you have any questions, feel free to [contact us](https://huntr.dev/contact-us).

`My fellow huntrs.,`

`Hello 👋! I'm Abhiram V, a.k.a. Anon-Artist. I am a cyber security enthusiast, an ethical hacker and a part-time bug bounty hunter. I would like to thank the team at`[_huntr_](https://huntr.dev/)`for giving me the opportunity to write a blog article on my experiences with`[_huntr_](https://huntr.dev/).

`Before I jump into my achievements on the platform, I want to start by telling you how this all started. I remember a time when I was fed up with getting many duplicates from major bug bounty platforms and public programs. I was exhausted with the lack of results and decided to take a break from the bug hunting world. Coincidentally, at the exact same time, I received a call from my friend` [_Asjid Kalam_](https://huntr.dev/users/Asjidkalam) `who was already a community member on` [_huntr_](https://huntr.dev/)`. After spending time catching up, he introduced me to the platform and I felt motivated to get back into bug hunting once again!`

`On my first visit to` [_huntr_](https://huntr.dev/)`, I was not ready as a lot of the features on the platform utilised GitHub. Another one of my friends, Ajmal Aboobacker (a.k.a`[_B3EF_](https://huntr.dev/users/B3EF))`who is also a bug bounty hunter on the platform, helped me and showed me the ropes when contributing to GitHub and` [_huntr_](https://huntr.dev/)`, alike. After this team collaboration, I did in fact see the disclosure explanation video which was surprisingly clear and easy to follow.`

`From that day on, I preferred disclosures over fixing as I loved the thrill of finding vulnerabilities in open source packages.`
![Anon-Artist](https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/PEKQHyydCRzfxkKM.jpg)

[Anon-Artist](https://huntr.dev/users/Anon-Artist)

`I started by reporting some "low-hanging" fruit within a few days of joining the plaform. I quickly familiarized myself with` [_huntr_](https://huntr.dev/) `and started to seek for critical vulnerabilities. At first, I found an application called` [_cabot_](https://pypi.org/project/cabot/) - `an open source network monitoring application (written in Python). I proceeded to check the authentication process first, and found nothing surprising. So, I decided to move on and focus in on how the package worked fundamentally. After spending more than a hour understanding the "in's and out's" of the package, I tried to pushed myself and see if I could trigger some`_XSS (Cross-site Scriping)_ `payloads. At first, I was using the admin account, but after a few minutes, I found a way to trigger a persistent` _XSS_ `vulnerability. Although I was surprised with my finding, I still wanted to dig further to see if I could increase the criticality of the disclosure, so I didn't stop quite yet! After spending some time reflecting on the journey so far, I tried creating multiple users under the administration account and triggering` _XSS_ `in one of the nodes - sending users to notify all users including the administration. My intuition was perfect. Now, from the user, I could exploit the entire network by triggering an` _XSS_ `payload.`
![Disclosure in Cabot](https://landen.imgix.net/blog_ihKQMyRvTUWMCgFu/assets/JAAhEjCtdpfXuoCj.jpg)
[Disclosure in Cabot](https://www.huntr.dev/bounties/1-pip-cabot)

`It was a critical bug centered around privilege escalation. After finding this vulnerability, I applied for a` [CVE](https://cve.mitre.org/) `and requested that the exploit was added to _exploitdb_. Within a week, I got the approval! I was so happy to get my first` _CVE_ ([CVE-2020-7734](https://nvd.nist.gov/vuln/detail/CVE-2020-7734)) `and to top it all off,` [_huntr_](https://huntr.dev/) `gave me a bounty payment too.`

**_It was all because of [*huntr*](https://huntr.dev/) and I always thank them._**
`Now, I spend my free time hunting for vulnerabilities in open source with` [_huntr_](https://huntr.dev/), `and have also decided to fix vulnerabilities too. I believe with both of these hand-in-hand, I will improve myself and learning in open source security and bug hunting.`

---

`Before wrapping up, I would like to mention the community support from` [_huntr_](https://huntr.dev/)`. All of the contributors and sheriffs (reviewers) have been awesome and they always support us throughout our journey.`

`Finally and once again, I want to thank` [_huntr_](https://huntr.dev/) `so much for posting my blog article and for their continued support.`

[Anon-Artist, Abhiram V](https://huntr.dev/users/Anon-Artist)

Read Anon-Artist's [Blog](https://itsmeanonartist.tech/blogs/blog2.html)
