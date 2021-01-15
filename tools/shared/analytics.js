import * as core from "@actions/core";

import heap from "heap-api";

const analytics = heap(`${process.env.HEAP_ID}`);

const staffIds = ["55323451", "4394852", "17127410", "34353676", "28839565", "63112452", "61279246"]

if(!staffIds.includes(process.env.USER_ID)) {
    analytics.track(process.env.EVENT_NAME, `github_${process.env.USER_ID}`, {
        name: process.env.PACKAGE_NAME
    }).then(() => {
        console.log(`Track ${process.env.EVENT_NAME} for user (${process.env.USER_ID}) on ${process.env.PACKAGE_NAME}`)
    })
} else {
    core.warning(`Analytics skipped...`)
}