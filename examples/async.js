// examples/async.js
// Simple examples demonstrating Promises, async/await, Promise.all, and error handling.
// Run with: node examples\async.js

console.log("=== async examples ===\n");

function fakeFetch(value, ms = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// 1) Using then/catch
fakeFetch("data-1", 200)
  .then((v) => {
    console.log("then result:", v);
    return fakeFetch("data-2", 150);
  })
  .then((v) => console.log("then chained:", v))
  .catch((err) => console.error("then/catch error:", err));

// 2) Using async/await
(async function main() {
  try {
    const a = await fakeFetch("await-1", 100);
    console.log("await a =", a);
    const b = await fakeFetch("await-2", 100);
    console.log("await b =", b);
  } catch (err) {
    console.error("async error:", err);
  }
})();

// 3) Promise.all — run multiple promises in parallel
Promise.all([fakeFetch("p1", 200), fakeFetch("p2", 100), fakeFetch("p3", 150)])
  .then((results) => console.log("Promise.all results =", results))
  .catch((err) => console.error("Promise.all error:", err));

// 4) Handling rejected promises
function willReject() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("fail")), 120)
  );
}
willReject()
  .then(() => console.log("should not run"))
  .catch((err) => console.log("caught reject:", err.message));

// 5) Async function that throws
(async function errorExample() {
  try {
    const val = await fakeFetch("ok", 50);
    console.log("before throw:", val);
    throw new Error("boom");
  } catch (err) {
    console.log("caught inside async:", err.message);
  }
})();

console.log("\n=== end of async examples (these run concurrently) ===");
