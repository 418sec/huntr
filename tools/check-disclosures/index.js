'use strict'

const fs = require('fs/promises')

const Ajv = require('ajv')
const fdir = require('fdir')
var jsonSourceMap = require('json-source-map')
const { Octokit } = require('@octokit/rest')

var ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
})

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const homeDir = '../../'
const bountyDir = homeDir + 'bounties'

const checkRunOutput = {
    title: 'Validate disclosure',
    annotations = [],
    summary: '',
}

const vulnerabilities = new fdir()
    .withBasePath()
    .filter(path => path.includes('vulnerability.json'))
    .crawl(bountyDir)

vulnerabilities.withPromise().then(async vulnerabilityPaths => {
    const vulnerabilitySchema = await fs.readFile('./assets/schemas/vulnerability.json', 'utf8')
    
    for (const vulnerabilityPath of vulnerabilityPaths) {
        const vulnerabilityDetails = await fs.readFile(vulnerabilityPath, 'utf8')

        // Check if every vulnerability.json is valid
        if (!ajv.validate(vulnerabilitySchema, vulnerabilityDetails)) {

            const sourceMap = jsonSourceMap.stringify(subject, null, 2);
            
            for (const validationError of ajv.errors) {
                // When a json is invalid, add the error to the check run output object
                const errorPointer = sourceMap.pointers[validationError.dataPath]
                checkRunOutput.annotations.push({
                    path: vulnerabilityPath,
                    start_line: errorPointer.value.line,
                    end_line: errorPointer.valueEnd.line,
                    annotation_level: 'failure',
                    message: validationError.message,
                    title: validationError.keyword,
                })
            }
        }

        if(checkRunOutput.annotations.length != 0) {
            checkRunOutput.summary += '* Invalid vulnerability.json file(s) found.\n'
        }

        // Check if every vulnerability has a corresponding README.md
        const vulnerabilityDir = vulnerabilityPath.split('/vulnerability.json')[0];
        await fs.access(`${vulnerabilityDir}/README.md`)
            .catch(() => {
                checkRunOutput.summary += '* Missing required README.md file(s).\n'
            })
    }
    
    // Send check run details to GitHub
    await octokit.checks.create({
        owner: '418sec',
        repo: 'huntr',
        name: 'Check disclosures',
        head_sha: process.env.GITHUB_SHA,
        conclusion: checkRunOutput.summary.length == 0 ? 'success' : 'failure',
        output: checkRunOutput
    })
    .then(response => {
        console.log('GitHub Check Run created:', response.data.html_url)
    })
    .catch(err => {
        console.log('Error creating check run:', err)
    })
})