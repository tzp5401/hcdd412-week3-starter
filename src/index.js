/**
 * HCDD 412 — Week 3 Starter Project
 * "Order Ledger" — a tiny, dependency-free module for summarizing a list of order totals.
 *
 * This module exists to give your GitHub Actions pipeline something real to build and test.
 * You are NOT required to change this logic for the Week 3 assignment — your job this week
 * is the PIPELINE around it, not the code inside it. (You'll extend the code itself in
 * later weeks as your team project grows.)
 */

/**
 * Sums an array of numeric order totals.
 * @param {number[]} amounts
 * @returns {number}
 */
function sum(amounts) {
  if (!Array.isArray(amounts)) {
    throw new TypeError("sum() expects an array of numbers");
  }
  return amounts.reduce((total, amount) => total + amount, 0);
}

/**
 * Averages an array of numeric order totals. Returns 0 for an empty array
 * rather than throwing, so callers don't need to special-case empty input.
 * @param {number[]} amounts
 * @returns {number}
 */
function average(amounts) {
  if (!Array.isArray(amounts)) {
    throw new TypeError("average() expects an array of numbers");
  }
  if (amounts.length === 0) return 0;
  return sum(amounts) / amounts.length;
}

/**
 * Formats a number as a currency string, e.g. formatCurrency(1234.5) -> "$1,234.50"
 * @param {number} amount
 * @param {string} currency ISO currency code; only "USD" is supported in this starter.
 * @returns {string}
 */
function formatCurrency(amount, currency = "USD") {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    throw new TypeError("formatCurrency() expects a numeric amount");
  }
  if (currency !== "USD") {
    throw new RangeError(`Unsupported currency: ${currency}`);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

// Demo entry point — this is what `npm start` runs.
function main() {
  const orders = [42.5, 19.99, 103.25, 76.0];
  console.log("HCDD 412 — Order Ledger (Week 3 starter)");
  console.log("Orders:", orders.map((a) => formatCurrency(a)).join(", "));
  console.log("Total:", formatCurrency(sum(orders)));
  console.log("Average:", formatCurrency(average(orders)));
}

if (require.main === module) {
  main();
}

module.exports = { sum, average, formatCurrency };
