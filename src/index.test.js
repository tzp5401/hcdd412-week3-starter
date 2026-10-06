/**
 * HCDD 412 — Week 3 Starter Project — Tests
 *
 * Uses Node's built-in test runner (node:test) and assertion library (node:assert) —
 * no test framework dependency required. Run with: npm test
 */

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average, formatCurrency } = require("./index.js");

test("sum() adds a list of order totals", () => {
  assert.equal(sum([10, 20, 30]), 60);
});

test("sum() returns 0 for an empty array", () => {
  assert.equal(sum([]), 0);
});

test("sum() rejects non-array input", () => {
  assert.throws(() => sum("not an array"), TypeError);
});

test("average() computes the mean of order totals", () => {
  assert.equal(average([10, 20, 30]), 20);
});

test("average() returns 0 for an empty array instead of throwing", () => {
  assert.equal(average([]), 0);
});

test("formatCurrency() formats USD with two decimal places", () => {
  assert.equal(formatCurrency(1234.5), "$1,234.50");
});

test("formatCurrency() rejects unsupported currencies", () => {
  assert.throws(() => formatCurrency(10, "EUR"), RangeError);
});

test("formatCurrency() rejects non-numeric input", () => {
  assert.throws(() => formatCurrency("10"), TypeError);
});
