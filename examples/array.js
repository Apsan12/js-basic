// examples/array.js
// Simple, focused examples for arrays, destructuring, spread/rest operators.
// Run with: node examples\array.js

console.log("=== arrays, destructuring, spread/rest examples ===\n");

// 1) Basic arrays and indexing
const fruits = ["Apple", "Banana", "Cherry"];
console.log("fruits[0] =", fruits[0]);

// 2) Array destructuring (assign elements to variables)
const [first, second, third] = fruits;
console.log("destructured:", first, second, third);

// 3) Skip elements and use defaults
const [a, , c2 = "Default"] = fruits; // skip second element, default for third
console.log("a, c2 =", a, c2);

// 4) Swap variables using destructuring
let x = 1,
  y = 2;
console.log("before swap:", x, y);
[x, y] = [y, x];
console.log("after swap:", x, y);

// 5) Object destructuring (rename and defaults)
const user = { id: 1, name: "Lee", role: "student" };
const { name: userName, role = "guest", missing = "N/A" } = user;
console.log("userName, role, missing =", userName, role, missing);

// 6) Spread operator for arrays — combine or copy
const more = ["Durian", ...fruits, "Elderberry"];
console.log("combined with spread =", more);
const copy = [...fruits];
console.log("shallow copy =", copy);

// 7) Rest operator in function parameters
function joinWith(separator, ...items) {
  return items.join(separator);
}
console.log("joinWith(',', 'a','b','c') =", joinWith(",", "a", "b", "c"));

// 8) Common array helpers
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
console.log("doubled =", doubled);
const evens = nums.filter((n) => n % 2 === 0);
console.log("evens =", evens);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("sum =", sum);

// 9) Finding and destructuring results
const people = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
const found = people.find((p) => p.id === 2);
if (found) {
  const { id: fid, name: fname } = found; // destructure the found object
  console.log("found:", fid, fname);
}

// 10) Nested destructuring (arrays and objects)
const nested = { top: [10, 20, { deep: "value" }] };
const {
  top: [t1, , { deep }],
} = nested;
console.log("nested destructured t1, deep =", t1, deep);

console.log("\n=== end of array/destructuring examples ===");


let student= {
  name:"apsan",
  age:12,
  course:"Bca"
}
console.log(student.age)

let v=10
let r="10"
console.log(v==r)
console.log(v===r)