## Discription
encountered **RateLimiting** in login page of Laravite/CMS Repo while during little recon. Laravite/cms is an open source of Content Management System developed with Laravel framework.
## POC
- clone & setup laravite/cms or just test in CMS demos website https://lavalite.org/client/login
- successfull request be like : https://drive.google.com/file/d/15rFZWpFaYyCoFftS-mzq76GStSVpg1fr/view?usp=sharing
- used intruder with 1 thread in burp comunity edition to test for ratelimiting at the password field
      - https://drive.google.com/file/d/1MUWXMfC47pae5LxPcM1YNgdFl4xQR1ei/view?usp=sharing while rate limiting has not been triggered, laravite/cms login will direct itself to the login page for wrong passwords.
      - intruder setups :
                - https://drive.google.com/file/d/1zNY5awLIKWVy9cziGmFWLV8bHOLm-4dK/view?usp=sharing
                - https://drive.google.com/file/d/111CcUOZ-3cvmgxeqy8QFObiaBrogXcPQ/view?usp=sharing
                - https://drive.google.com/file/d/1ONMke_lt3iEWu0iVIsbGAitrcWAO0MYm/view?usp=sharing
