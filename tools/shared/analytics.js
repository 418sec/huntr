const heap = require("heap-api")(`${process.env.HEAP_ID}`);

await heap.track(process.env.EVENT_NAME, `github_${USER_ID}`, {
    name: process.env.PACKAGE_NAME
})