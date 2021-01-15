"use strict";

import * as fs from "fs/promises";
import * as core from "@actions/core";
import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient(process.env.GRAPHQL_API_URL, {
    headers: {
        "x-api-key": `${process.env.GRAPHQL_API_KEY}`
    }
})

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

const packageRegistry = jsonContents.Package.Registry === "pip" ? "pypi" : jsonContents.Package.Registry;

if (!(packageRegistry === "other")) {

    const packageName = jsonContents.Package.Name;
    const packageUrl = jsonContents.Package.URL;

    const repositoryOwner = jsonContents.Repository.Owner;
    const repositoryName = jsonContents.Repository.Name;

    const query = gql`
        query getPackageDetails($PackageName: String!, $PackageManager: String!) {
            getPackageDetails(PackageName: $PackageName, PackageManager: $PackageManager)
        }
    `

    const variables = {
        PackageName: packageName,
        PackageManager: packageRegistry
    }

    const packageDetails = await graphQLClient.request(query, variables)
        .then(response => {
            return JSON.parse(response.getPackageDetails)
        })
        .catch(() => {
            core.setFailed(
                `The package name (${packageName}) and/or package registry (${packageRegistry}) could not be found...`
            )
        });

    if (packageDetails.package.url !== packageUrl) {
        core.warning(`Suggestion - should your Package.URL be: ${packageDetails.package.url}?`)
        core.setFailed(`The PR does not contain a valid registry URL...`)
    }

    if (packageDetails.repository.owner !== repositoryOwner && packageDetails.repository.name !== repositoryName) {
        core.warning(`Suggestion - should your Repository.Owner and Repository.Name be: ${packageDetails.repository.owner}, ${packageDetails.repository.name}?`)
        core.setFailed(`The PR does not contain a valid registry URL...`)
    }

} else {
    core.warning(`Relevant package info. validation skipped...`)
}
