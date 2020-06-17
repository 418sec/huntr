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
    title: '',
    summary: '',
    annotations: [],
}

const vulnerabilities = new fdir()
    .withBasePath()
    .filter(path => path.includes('vulnerability.json'))
    .crawl(bountyDir)

vulnerabilities.withPromise().then(async vulnerabilityPaths => {
    const vulnerabilitySchema = await fs.readFile('./assets/schemas/vulnerability.json', 'utf8').then(JSON.parse)
    
    for (var vulnerabilityPath of vulnerabilityPaths) {
        var vulnerabilityDetails = await fs.readFile(vulnerabilityPath, 'utf8').then(JSON.parse)

        // Check if every vulnerability.json is valid
        if (!ajv.validate(vulnerabilitySchema, vulnerabilityDetails)) {

            var sourceMap = jsonSourceMap.stringify(vulnerabilityDetails, null, 2);
            
            for (var validationError of ajv.errors) {
                // When a json is invalid, add the error to the check run output object
                var errorPointer = sourceMap.pointers[validationError.dataPath]
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

        // Check if every vulnerability has a corresponding README.md
        var vulnerabilityDir = vulnerabilityPath.split('/vulnerability.json')[0];
        await fs.access(`${vulnerabilityDir}/README.md`)
            .catch(() => {
                checkRunOutput.summary += '* Missing required README.md file(s).\n'
            })
    }

    if(checkRunOutput.annotations.length != 0) {
        checkRunOutput.summary += '* Invalid vulnerability.json file(s) found.\n'
    }

    checkRunOutput.title = checkRunOutput.summary.length == 0 ? 'Validation succeeded' : 'Validation failed'

    // Send check run details to GitHub
    await octokit.checks.create({
        owner: '418sec',
        repo: 'huntr',
        name: 'Disclosure validator',
        head_sha: process.env.GITHUB_HEAD_REF,
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
.catch((err) => {
    console.log(err)
})