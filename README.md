# hcdd412-week3-starter

A dependency-free Node.js starter project for **HCDD 412, Week 3 — Continuous Delivery & AI-Powered Pipelines**.

## What's in this repo

```
hcdd412-week3-starter/
├── package.json          npm scripts: start, test, build
├── src/
│   ├── index.js          the "Order Ledger" module (sum, average, formatCurrency)
│   └── index.test.js     tests for index.js, using Node's built-in test runner
├── scripts/
│   └── build.js          packages src/ into dist/ + writes build-info.json
└── README.md              this file
```

**There is no `.github/workflows/` folder.** That's not an oversight — building that folder
and the workflow file inside it *is* the Week 3 assignment. See the **Week 3 Lab Walkthrough**
companion guide (posted alongside this repo in Canvas) for verbatim, step-by-step instructions.

## Requirements

- Node.js 18 or later (`node --version` to check)
- No other dependencies. `npm install` will not download anything — that's intentional, so a
  flaky package registry can never be the reason your pipeline fails.

## npm scripts

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies (there are none — this just generates/validates `package-lock.json`) |
| `npm test` | Runs the test suite in `src/*.test.js` using Node's built-in test runner |
| `npm run build` | Copies `src/` (minus test files) into `dist/`, plus a `build-info.json` manifest |
| `npm start` | Runs the demo entry point (`src/index.js`) |

## Quick start

```bash
git clone <your-fork-or-repo-url>
cd hcdd412-week3-starter
npm install
npm test
npm run build
npm start
```

All four commands should complete with no errors before you write a single line of workflow
YAML. If `npm test` or `npm run build` fails locally, it will fail in GitHub Actions too —
fix it locally first.

## About the code itself

`src/index.js` is a tiny "Order Ledger" module — `sum()`, `average()`, and `formatCurrency()`
over a list of order totals. You are not required to modify this logic for the Week 3
assignment. Your job this week is the **pipeline**, not the application code. You'll extend
the code itself as your team project grows in later weeks.

## License

Course material for HCDD 412, Penn State Abington, Fall 2026. Not for redistribution outside the course.
