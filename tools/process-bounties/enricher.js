'use strict'

const { Octokit } = require("@octokit/rest");
const fetch = require("node-fetch")
const fs = require("fs/promises")
const fdir = require("fdir")

const homeDir = "../../"
const bountyDir = homeDir + "bounties"

const bounties = new fdir()
    .withBasePath()
    .filter(path => path.includes("vulnerability.json"))
    .crawl(bountyDir)

bounties.withPromise().then(async bountyPaths => {
    // Iterate through each bounty, and enrich, if appropriate
    for (const bountyPath of bountyPaths) {
        let bountyDetails = await fs.readFile(bountyPath, 'utf8').then(JSON.parse)
        console.log('Enriching bounty:', bountyPath)

        const bountyDir = bountyPath.split("/vulnerability.json")[0]
//         const vulnerabilityDescription = await fs.readFile(`${bountyDir}/README.md`, 'utf8')
        const vulnerabilityDetailsPath = `${bountyDir}/vulnerability.json`
        let vulnerabilityDetails = await fs.readFile(vulnerabilityDetailsPath, 'utf8').then(JSON.parse)

        // Let's work out the root repositry. Format: https://github.com/:owner/:repo
        const repositoryUrlParts = vulnerabilityDetails.Repository.URL.split('/')

        // Add the Repository Owner & Name as individual key/values
        vulnerabilityDetails.Repository.Owner = repositoryUrlParts[3]
        vulnerabilityDetails.Repository.Name = repositoryUrlParts[4]

        // Call GitHub's API
        const github = new Octokit({
            auth: '9d916b88af3fa827d39a6969964bc455cd7eb496'
        });

        // Get Forks & Stars from GitHub
        await github.repos
            .get({
              owner: vulnerabilityDetails.Repository.Owner,
              repo: vulnerabilityDetails.Repository.Name
            })
            .then((octokitResponse) => {
              vulnerabilityDetails.Repository.Forks = octokitResponse.data.forks_count;
              vulnerabilityDetails.Repository.Stars = octokitResponse.data.stargazers_count;
              console.log(`Forks appended: ${octokitResponse.data.forks_count}, Stars appended: ${octokitResponse.data.stargazers_count}`);
            })
            .catch((octokitError) => {
              console.error("ERROR fetching package repository data:", octokitError);
            });

        // Find and add Download count for the specific package
        switch (vulnerabilityDetails.Package.Registry.toLowerCase()) {
            case 'npm':
                await fetch(`https://api.npmjs.org/downloads/range/2000-01-01:2030-12-31/${vulnerabilityDetails.Package.Name}`)
                    .then((response) => response.json())
                    .then((npmApiResponse) => {
                        // console.log('npmApiResponse', npmApiResponse)
                        let total = 0
                        for (const i in npmApiResponse.downloads) {
                            if (npmApiResponse.downloads.hasOwnProperty(i)) {
                                const downloadCount = npmApiResponse.downloads[i]
                                total += downloadCount.downloads
                            }
                        }

                        console.log('NPM package total downloads:', total)
                        vulnerabilityDetails.Package.Downloads = total.toString()
                    }).catch((catchApiResponse) => {
                        console.log('ERROR fetching download data from NPM API, defaulting to "0":', catchApiResponse)
                        vulnerabilityDetails.Package.Downloads = "0"
                    })
                break
            case 'pip':
                await fetch(`https://pypistats.org/api/packages/${vulnerabilityDetails.Package.Name}/overall`)
                    .then((response) => response.json())
                    .then((pipApiResponse) => {
                        // console.log('pipApiResponse response', pipApiResponse)
                        let total = 0
                        for (const i in pipApiResponse.data) {
                            if (pipApiResponse.data.hasOwnProperty(i)) {
                                const downloadCount = pipApiResponse.data[i]
                                total += downloadCount.downloads
                            }
                        }

                        console.log('Pip package total downloads:', total)
                        vulnerabilityDetails.Package.Downloads = total.toString()
                    })
                    .catch((catchApiResponse) => {
                        console.log('ERROR fetching download count from PyPi API, defaulting to "0":', catchApiResponse)
                        vulnerabilityDetails.Package.Downloads = "0"
                    })
                break
            case 'maven': // Download count not available for this registry
                vulnerabilityDetails.Package.Downloads = "0"
                console.log('Maven download count not supported, defaulting to "0"')
                break
            case 'packagist':
                const packagistPackageName = `${vulnerabilityDetails.Repository.Owner}/${vulnerabilityDetails.Repository.Name}`
                await fetch(`https://repo.packagist.org/packages/${packagistPackageName}.json`)
                    .then((response) => response.json())
                    .then((packagistApiResponse) => {
                        // console.log('packagistApiResponse', packagistApiResponse)
                        console.log('Packagist package total downloads:', packagistApiResponse.package.downloads.total)
                        vulnerabilityDetails.Package.Downloads = packagistApiResponse.package.downloads.total.toString()
                    })
                    .catch((catchApiResponse) => {
                        console.log('ERROR fetching download count from Packagist API, defaulting to "0":', catchApiResponse)
                        vulnerabilityDetails.Package.Downloads = "0"
                    })
                break
            case 'rubygems':
                await fetch(`https://rubygems.org/api/v1/gems/${vulnerabilityDetails.Package.Name}.json`)
                    .then((response) => response.json())
                    .then((rubyGemsApiResponse) => {
                        // console.log('rubyGemsApiResponse', rubyGemsApiResponse)
                        console.log('RubyGems package total downloads:', rubyGemsApiResponse.downloads)
                        vulnerabilityDetails.Package.Downloads = rubyGemsApiResponse.downloads.toString()
                    })
                    .catch((catchApiResponse) => {
                        console.log('ERROR fetching download count from RubyGems API, defaulting to "0":', catchApiResponse)
                        vulnerabilityDetails.Package.Downloads = "0"
                    })
                break
            default:
                vulnerabilityDetails.Package.Downloads = "0"
                console.log('ERROR, download count not detected, unknown Package Registry, defaulting to "0":', vulnerabilityDetails.Package.Registry)
                break
        }
        // Write the final output to vulnerability.json
        await fs.writeFile(vulnerabilityDetailsPath, JSON.stringify(vulnerabilityDetails, null, 4))
    }
})
