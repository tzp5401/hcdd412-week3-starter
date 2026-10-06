/**
 * HCDD 412 — Week 3 Starter Project — Build Script
 *
 * A deliberately simple "build": copies runtime source files (excluding tests) into
 * dist/, and writes a small build-info.json manifest. This gives your GitHub Actions
 * pipeline a real artifact to archive — in a production pipeline this step would be
 * a bundler, compiler, or transpiler; here it's intentionally minimal so the focus
 * stays on the PIPELINE, not the build tooling.
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");
const DIST_DIR = path.join(__dirname, "..", "dist");

function isTestFile(fileName) {
  return fileName.endsWith(".test.js");
}

function main() {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });

  const files = fs.readdirSync(SRC_DIR).filter((f) => !isTestFile(f));
  for (const file of files) {
    fs.copyFileSync(path.join(SRC_DIR, file), path.join(DIST_DIR, file));
  }

  const buildInfo = {
    builtAt: new Date().toISOString(),
    commit: process.env.GITHUB_SHA || "local",
    runId: process.env.GITHUB_RUN_ID || "local",
    filesIncluded: files,
  };
  fs.writeFileSync(
    path.join(DIST_DIR, "build-info.json"),
    JSON.stringify(buildInfo, null, 2) + "\n"
  );

  console.log(`Build complete: ${files.length} file(s) copied to dist/`);
  console.log(JSON.stringify(buildInfo, null, 2));
}

main();
