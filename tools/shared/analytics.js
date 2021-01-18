import * as core from "@actions/core";

import heap from "heap-api";

const analytics = heap(`${process.env.HEAP_ID}`);

await analytics.track(process.env.EVENT_NAME, `github_${process.env.USER_ID}`, {
    name: process.env.PACKAGE_NAME
}).then(() => {
    console.log(`Track ${process.env.EVENT_NAME} for user (${process.env.USER_ID}) on ${process.env.PACKAGE_NAME}`)
})
