# Description

I encountered **RateLimiting** in the login page of the LavaLite/CMS repo while performing recon to find the cms XSS bug that is among the bugs to be fixed in the huntr platform. Lavalite/CMS is an open source version of the Content Management System developed with Laravel framework.

# POC

1. Clone and setup [Lavalite/CMS](https://github.com/LavaLite/cms) or just test in the CMS demo [website](https://lavalite.org/client/login).

2. A successful request will look like [this](https://drive.google.com/file/d/15rFZWpFaYyCoFftS-mzq76GStSVpg1fr/view?usp=sharing).

3. I used an intruder with 1 thread in BURP comunity edition to test for rate limiting on the password field.
      
4. While rate limiting has not been triggered, the Lavalite/CMS login will direct itself to the login page for wrong passwords. See references.
      
Intruder setups :
- [1](https://drive.google.com/file/d/1zNY5awLIKWVy9cziGmFWLV8bHOLm-4dK/view?usp=sharing)
- [2](https://drive.google.com/file/d/111CcUOZ-3cvmgxeqy8QFObiaBrogXcPQ/view?usp=sharing)
- [3](https://drive.google.com/file/d/1ONMke_lt3iEWu0iVIsbGAitrcWAO0MYm/view?usp=sharing)
