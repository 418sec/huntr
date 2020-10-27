"use strict";

const { DateTime } = require("luxon");
const { Octokit } = require("@octokit/rest");
const fetch = require("node-fetch");
const fs = require("fs/promises");
const { fdir } = require("fdir");

const homeDir = "../../";
const bountyDir = homeDir + "bounties";

const bounties = new fdir()
  .withBasePath()
  .filter((path) => path.includes("vulnerability.json"))
  .crawl(bountyDir);

console.log("bountyDir", bountyDir);
bounties.withPromise().then(async (bountyPaths) => {
  // Iterate through each bounty, and enrich, if appropriate
  for (const bountyPath of bountyPaths) {
    // let bountyDetails = await fs.readFile(bountyPath, "utf8").then(JSON.parse);
    console.log("Enriching bounty:", bountyPath);

    const bountyDir = bountyPath.split("/vulnerability.json")[0];
    // const vulnerabilityDescription = await fs.readFile(`${bountyDir}/README.md`, 'utf8')
    const vulnerabilityDetailsPath = `${bountyDir}/vulnerability.json`;
    let vulnerabilityDetails = await fs
      .readFile(vulnerabilityDetailsPath, "utf8")
      .then(JSON.parse);

    // Let's work out the root repositry. Format: https://github.com/:owner/:repo
    const repositoryUrlParts = vulnerabilityDetails.Repository.URL.split("/");

    // Add the Repository Owner & Name as individual key/values
    vulnerabilityDetails.Repository.Owner = repositoryUrlParts[3];
    vulnerabilityDetails.Repository.Name = repositoryUrlParts[4];

    // Call GitHub's API
    const github = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    // Get Forks & Stars from GitHub
    await github.repos
      .get({
        owner: vulnerabilityDetails.Repository.Owner,
        repo: vulnerabilityDetails.Repository.Name,
      })
      .then((octokitResponse) => {
        vulnerabilityDetails.Repository.Forks = octokitResponse.data.forks_count.toString();
        vulnerabilityDetails.Repository.Stars = octokitResponse.data.stargazers_count.toString();
        console.log(
          `Forks appended: ${octokitResponse.data.forks_count}, Stars appended: ${octokitResponse.data.stargazers_count}`
        );
      })
      .catch((octokitError) => {
        console.error("ERROR fetching package repository data:", octokitError);
      });

    // Find and add Download count for the specific package
    switch (vulnerabilityDetails.Package.Registry.toLowerCase()) {
      case "npm":
        const { downloads } = await (
          await fetch(
            `https://api.npmjs.org/downloads/point/last-week/${vulnerabilityDetails.Package.Name}`
          )
        )
          .json()
          .catch((error) => {
            vulnerabilityDetails.Package.Downloads = "0";
            console.log(
              `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
              error
            );
          });

        // Check it exists before assigning
        downloads
          ? (vulnerabilityDetails.Package.Downloads = downloads.toString())
          : (vulnerabilityDetails.Package.Downloads = "0");
        break;
      case "rubygems":
        // get the latest version for this package
        const { version } = await (
          await fetch(
            `https://rubygems.org/api/v1/versions/${vulnerabilityDetails.Package.Name}/latest.json`
          )
        ).json();

        // get the downloads of the latest version of this package
        if (version !== "unknown") {
          const { created_at, version_downloads } = await (
            await fetch(
              `https://rubygems.org/api/v2/rubygems/${vulnerabilityDetails.Package.Name}/versions/${version}.json`
            )
          )
            .json()
            .catch((error) => {
              vulnerabilityDetails.Package.Downloads = "0";
              console.log(
                `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
                error
              );
            });

          // divide it by days since it was created
          const createDatetime = DateTime.fromISO(created_at);
          const todayDatetime = DateTime.local();
          const { days: daysSinceCreated } = todayDatetime.diff(
            createDatetime,
            "days"
          );

          vulnerabilityDetails.Package.Downloads = Math.round(
            (version_downloads / daysSinceCreated) * 7
          ).toString();
        } else {
          vulnerabilityDetails.Package.Downloads = "0";
          console.log(
            `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
            "Could not fetch version to calculate weekly downloads."
          );
        }
        break;
      case "pip":
        const last_week = await (
          await fetch(
            `https://pypistats.org/api/packages/${vulnerabilityDetails.Package.Name}/recent?period=week`
          ).catch((error) => {
            vulnerabilityDetails.Package.Downloads = "0";
            console.log(
              `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
              error
            );
          })
        )
          .json()
          .catch((error) => {
            vulnerabilityDetails.Package.Downloads = "0";
            console.log(
              `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
              error
            );
          });
        vulnerabilityDetails.Package.Downloads = last_week.toString();
        break;
      case "packagist":
        const {
          package: {
            downloads: { daily },
          },
        } = await (
          await fetch(
            `https://repo.packagist.org/packages/${vulnerabilityDetails.Package.Name}.json`
          )
        )
          .json()
          .catch((error) => {
            vulnerabilityDetails.Package.Downloads = "0";
            console.log(
              `ERROR fetching download count for '${vulnerabilityDetails.Package.Registry}/${vulnerabilityDetails.Package.Name}':`,
              error
            );
          });
        vulnerabilityDetails.Package.Downloads = (daily * 7).toString();
        break;
      default:
        vulnerabilityDetails.Package.Downloads = "0";
    }
    // Write the final output to vulnerability.json
    await fs.writeFile(
      vulnerabilityDetailsPath,
      JSON.stringify(vulnerabilityDetails, null, 4)
    );
  }
});
