## Discription
encountered **RateLimiting** in login page of LavaLite/CMS Repo while performing little recon to find the cms xss bug that is among the bugs to be fixed in the huntr platform. Lavavite/cms is an open source of Content Management System developed with Laravel framework.
## POC

- clone and setup lavalite/cms **https://github.com/LavaLite/cms** or just test in CMS demos website **https://lavalite.org/client/login**

- successfull request be like : https://drive.google.com/file/d/15rFZWpFaYyCoFftS-mzq76GStSVpg1fr/view?usp=sharing

- used intruder with 1 thread in burp comunity edition to test for ratelimiting at the password field
      
      - https://drive.google.com/file/d/1MUWXMfC47pae5LxPcM1YNgdFl4xQR1ei/view?usp=sharing while rate limiting has not been triggered, lavalite/cms login will direct itself to the login page for wrong passwords.
      
      
      - intruder setups :
                - https://drive.google.com/file/d/1zNY5awLIKWVy9cziGmFWLV8bHOLm-4dK/view?usp=sharing
                - https://drive.google.com/file/d/111CcUOZ-3cvmgxeqy8QFObiaBrogXcPQ/view?usp=sharing
                - https://drive.google.com/file/d/1ONMke_lt3iEWu0iVIsbGAitrcWAO0MYm/view?usp=sharing
