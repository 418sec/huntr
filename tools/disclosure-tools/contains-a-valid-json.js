"use strict";

import * as fs from "fs/promises";

import Ajv from "ajv";

import * as core from "@actions/core"

const diff = JSON.parse(process.env.DIFF);

const jsonPath = "../../" + diff.filter(file => 
    file.path.includes("vulnerability.json")
)[0].path;

const jsonContents = await fs
    .readFile(jsonPath, "utf-8")
    .then(JSON.parse)
    .catch(() => {
        core.setFailed("The PR does not contain a readable vulnerability.json...");
    });

const schema = await fs
    .readFile("./assets/schemas/vulnerability.json", "utf8")
    .then(JSON.parse);

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
})

if(!ajv.validate(schema, jsonContents)) {
    ajv.errors.forEach((error) => {
        core.warning(`${error.dataPath} : ${error.message}`)
    })

    core.setFailed("The PR does not contain a valid vulnerability.json...")
}