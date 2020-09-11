'use strict'

const fs = require('fs/promises')

const Ajv = require('ajv')
const core = require('@actions/core');
const fdir = require('fdir')
var jsonSourceMap = require('json-source-map')

var ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
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
                core.error(validationError.message)
                //console.log(vulnerabilityPath)
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

    if(checkRunOutput.summary.length != 0){
        core.setFailed(checkRunOutput.summary);
    }
})
.catch((err) => {
    console.log(err)
    core.setFailed(err);
})