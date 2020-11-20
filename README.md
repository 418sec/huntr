<p align="center">
<a href="https://huntr.dev/" target="_blank"><img src="img/logo.png" width="325"></a>
</p>
<p align="center">
<hr />
</p>
<br />
<p align="center">
<b><a href="https://huntr.dev/" _target="blank">huntr.dev</a> - the place to protect open source</b>
</p>
<p align="center">
<code style="font-size:12px;background-color:black;">Get recognised for protecting millions of developers...</code>
</p>
<br />
<p align="center">
<a href="https://github.com/418sec/huntr/actions?query=workflow%3A%22Process+bounties%22" target="_blank"><img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/418sec/huntr/Process%20bounties/staging?style=flat-square"></a>
<a href="https://huntr.dev/" target="_blank"><img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=huntr.dev&style=flat-square&up_color=blue&up_message=online&url=https%3A%2F%2Fhuntr.dev"></a>
<a href="https://github.com/418sec/huntr/pulls" target="_blank"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/418sec/huntr?style=flat-square"></a>
<a href="https://github.com/418sec/huntr/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/418sec/huntr?style=flat-square"></a>
</p>
<br />
<p align="center">
<a href="https://github.com/418sec/huntr/fork"><img alt="GitHub forks" src="https://img.shields.io/github/forks/418sec/huntr?style=flat-square"></a>
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/418sec/huntr?style=flat-square">
<a href="https://github.com/418sec/huntr/graphs/contributors" target="_blank"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/418sec/huntr?style=flat-square"></a>
<a href="https://paypal.me/418sec" target="_blank"><img alt="Support huntr" src="https://img.shields.io/badge/PayPal-sponsor-orange?style=flat-square&logo=paypal"></a>
<a href="https://github.com/418sec/huntr/pulls?q=is%3Apr+is%3Aopen+label%3Adisclosure" target="_blank"><img alt="GitHub closed pull requests by-label" src="https://img.shields.io/github/issues-pr-closed-raw/418sec/huntr/disclosure?color=%23ef5a4d&label=resolved%20disclosure%20PRs&style=flat-square"></a>
</p>
<br />
<p align="center">
<a href="https://discord.gg/wkPS6yx"><img alt="Discord" src="https://img.shields.io/discord/672495759706554369?label=Discord&logo=discord&logoColor=%23ef5a4d&style=flat-square"></a>
<a href="https://twitter.com/huntrdev"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/huntrdev?style=social"></a>
</p>
<br />
<p align="center"><a href="https://huntr.dev" target="_blank"><b>Visit the platform</b></a> or continue reading...</p>
<p align="center">
<a href="https://huntr.dev" target="_blank"><img src="img/bounties.png" width="350"></a>
<a href="https://huntr.dev" target="_blank"><img src="img/bounty.png" width="350"></a>
</p>
<p align="center">
<a href="https://huntr.dev" target="_blank"><img src="img/comments.png" width="350"></a>
<a href="https://huntr.dev" target="_blank"><img src="img/user.png" width="351"></a>
</p>
<hr />
<p align="center">
  <a href="#about"><b>About</b></a> •
  <a href="#disclose"><b>Disclose</b></a> •
  <a href="#fix"><b>Fix</b></a> •
  <a href="#links"><b>Links</b></a> •
  <a href="#updates"><b>Updates</b></a>
</p>
<hr />

## About

<br />

<a href="https://huntr.dev"><b>huntr</b></a> is a bug bounty platform developed by <a href="https://418sec.com"><b>418sec</b></a>. We provide the open source community a way to learn and master open source security with real world practice on packages being utilised by millions of developers and services around the world.

This repository is an _open_ and _freely_ available database for all of the disclosures we have received from the open source community. We display these disclosures on our platform for you to learn about, attempt a fix and discuss with others.

You already have what it takes. Keep reading to learn more on how to disclose a vulnerability, submit a fix and share your opinions with us.

_If you want to do a bit more reading around the platform and our mission, take a look at_:

- [Our Blog](https://huntr.dev/blog)
- [AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/how-a-startup-wants-to-help-secure-the-open-source-ecosystem-with-huntr-a-bug-bounty-board/)

## Disclose

<br />

Before disclosing a vulnerability, you should fork the repository and familiarise yourself with the contents of your new repo. You can fork by clicking here:

<br />

<a href="https://github.com/418sec/huntr/fork"><img alt="GitHub forks" src="https://img.shields.io/github/forks/418sec/huntr?style=social"></a>

### Database

<br />

The `bounties` folder holds all previous disclosures and is also the location where new disclosures are added. Inside the `bounties` folder, each directory represents a _package manager_. These include:

<br />

<a href="https://maven.apache.org/"><img src="https://img.shields.io/badge/maven-black?style=plastic&logo=java&logoColor=red"></a>
<a href="https://npmjs.com"><img src="https://img.shields.io/badge/npm-black?style=plastic&logo=npm"></a>
<a href="https://packagist.org/"><img src="https://img.shields.io/badge/packagist-black?style=plastic&logo=composer&logoColor=blue"></a>
<a href="https://pip.pypa.io/en/stable/"><img src="https://img.shields.io/badge/pip-black?style=plastic&logo=pypi&logoColor=yellow"></a>
<a href="https://rubygems.org/"><img src="https://img.shields.io/badge/rubygems-black?style=plastic&logo=rubygems&logoColor=red"></a>
<img src="https://img.shields.io/badge/other-black?style=plastic">

<br />

Within each of these folders, you will find the names of packages that are served by these package managers. For example, `bounties/npm/yup` refers to:

<br />

<a href="https://www.npmjs.com/package/yup"><b>yup</b></a> on <a href="https://npmjs.com"><img src="https://img.shields.io/badge/npm-black?style=plastic&logo=npm"></a>

<br />

Some package managers (i.e. <a href="https://packagist.org/"><img src="https://img.shields.io/badge/packagist-black?style=plastic&logo=composer&logoColor=blue"></a>) format their package names like `owner/name`, e.g. <a href="https://packagist.org/packages/intervention/image"><b>intervention/image</b></a>. Where this is the case, the package directory assumes the following structure:

```
bounties
  - packagist
    - intervention
      - image
```

<br />

_Otherwise_, it will follow:

```
bounties
  - npm
    - yup
```

<br />

Inside of each package directory, there will be a numbered list of directories starting at `1`. This number is the identifier for the vulnerability/disclosure. For example, `bounties/npm/yup/1` is the first disclosure in our database for <a href="https://www.npmjs.com/package/yup"><b>yup</b></a>.

<br />

This number, as well as the directory, refers to the respective vulnerability on the platform. The contents of the files inside a directory location will be used to generate the content for the platform vulnerability page:

<br />

```js
https://huntr.dev/bounties/1-npm-yup
```

<br />

Each _new_ and _unique_ disclosure should iterate on this number, if the package for a specific package manager does not already exist.

<br />

### Submit a disclosure

<br />

Now that we have covered the basics of the vulnerability database, we can now submit a disclosure...

<br />

Each disclosure is made up of two files:

<br />

`vulnerability.json` and a `README.md`

<br />

The `vulnerability.json` contains all meta-data related to the vulnerability or disclosure. You can find a template below for the `vulnerability.json` which should be filled with relevant information. The `README.md` is a custom description of the disclosure that will appear on the platform. It is rendered with a simple Markdown processor that includes basic styling - similar to GitHub Flavoured Markdown. You can be as creative and artistic with your `README.md` as you please. These files are created by a discloser, within an existing or new package manager and package of choice.

For example, if you wanted to disclose a vulnerability in <a href="https://www.npmjs.com/package/lodash"><b>lodash</b></a> on <a href="https://npmjs.com"><img src="https://img.shields.io/badge/npm-black?style=plastic&logo=npm"></a>, on your personal fork of the repo, you will create two empty files:

<br />

```json
bounties/npm/lodash/1/vulnerability.json
```

```json
bounties/npm/lodash/1/README.md
```

<br />

### `vulnerability.json`

### `README.md`







<p align="center">
<i>Need more help? Take a look at our video walkthrough for more information...</i>
</p>
<p align="center">
<a href="https://www.youtube.com/watch?v=KBB5YtU84F8" title="How to disclose with huntr and GitHub"><img src="https://img.youtube.com/vi/KBB5YtU84F8/0.jpg" width="250"></a>
</p>



<p align="center"><b>Existing disclosures are labelled with: </b> <br /><img style="margin-top:20px;" alt="GitHub labels" src="https://img.shields.io/github/labels/418sec/huntr/disclosure">
<img alt="GitHub labels" src="https://img.shields.io/github/labels/418sec/huntr/discussion">
</p>

## Fix

<br />

## Links

<br />

If you'd like to disclose a vulnerability, [click here](https://github.com/418sec/huntr/compare/staging...staging?template=disclose-vulnerability.md)

If you'd like to sponsor huntr, [click here](https://www.paypal.me/418sec)

If you are a package maintainer and want to get in touch, [click here](https://www.huntr.dev/contact-us)

To join us on Discord, [click here](https://discord.gg/6wVS2dm)

To follow us on Twitter, [click here](https://twitter.com/huntrdev)



## Updates

<br />

<p align="center">
<i>Turn your notifications to <i>watching</i> to keep yourself up-to-date. To show us some love, give us a star!</i>
</p>

<p align="center" width="100">
<img src="img/watch.gif" width="600" />
</p>