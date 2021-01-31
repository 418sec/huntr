import * as fs from "fs/promises";
import * as core from "@actions/core";

const diff = JSON.parse(process.env.DIFF);

const jsonPath = "../../" + diff.filter(file => 
    file.path.includes("vulnerability.json")
)[0].path;

const { Package } = await fs
  .readFile(jsonPath, "utf8")
  .then(JSON.parse)
  .catch(() => {
    core.setFailed("A vulnerability.json could not be read...");
  });

try {
    const packageName = Package.Name;
    core.setOutput("package-name", packageName);
} catch {
    core.setFailed("Package [Object object] is undefined...");
}