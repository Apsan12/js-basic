/*
  This file is safe to run in Node (no browser DOM). Each section is
  short and demonstrates a single concept with an example and console output.
*/

// ---------- 1. Hello and simple function
console.log("--- Hello and simple function ---");
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Hello, Alice!

// ---------- 2. Arrow functions (shorter syntax)
console.log("\n--- Arrow functions ---");
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Bob"));

// ---------- 3. Template literals (string interpolation)
console.log("\n--- Template literals ---");
const age1 = 12;
const pi = 3.14;
const isStudent = true;
const message = `Age: ${age1}, Pi: ${pi}, Is Student: ${isStudent}`;
console.log(message);

// ---------- 4. let / const and variable rules
console.log("\n--- let / const ---");
let counter = 1; // changeable
const DAYS_IN_WEEK = 7; // constant by convention
console.log(counter, DAYS_IN_WEEK);
counter += 1;
console.log("counter after increment:", counter);

// ---------- 5. Destructuring (objects and arrays)
console.log("\n--- Destructuring ---");
const personObj = { name: "Carol", age: 28, city: "Paris" };
const { name: personName, age: personAge } = personObj; // rename while destructuring
console.log(personName, personAge);

const coords = [10, 20];
const [x, y] = coords;
console.log("x,y =", x, y);

// ---------- 6. Spread and rest
console.log("\n--- Spread and Rest ---");
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // spread to build a new array
console.log("arr2 =", arr2);

function sumAll(...nums) {
  // rest collects arguments into an array
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sumAll(1,2,3,4)=", sumAll(1, 2, 3, 4));

// ---------- 7. Default parameters
console.log("\n--- Default parameters ---");
function multiply(a, b = 2) {
  return a * b;
}
console.log("multiply(5)=", multiply(5)); // 10

// ---------- 8. Array helpers: map, filter, reduce
console.log("\n--- Array helpers ---");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log("doubled =", doubled);
const evens = numbers.filter((n) => n % 2 === 0);
console.log("evens =", evens);
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log("total =", total);

// ---------- 9. Objects: methods, shorthand, computed keys
console.log("\n--- Objects ---");
const key = "score";
const player = {
  name: "Dana",
  [key]: 100, // computed property name
  greet() {
    // method shorthand
    return `Hi, I'm ${this.name}`;
  },
};
console.log(player.score, player.greet());

// ---------- 10. Classes (syntactic sugar over prototypes)
console.log("\n--- Classes ---");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `Hello, I'm ${this.name} and I'm ${this.age}`;
  }
}
const p = new Person("Eve", 24);
console.log(p.sayHi());

// ---------- 11. Promises and async/await (asynchronous code)
console.log("\n--- Promises and async/await ---");
function fakeFetch(value, delay = 200) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

// Using then/catch
fakeFetch("hello").then((res) => console.log("then:", res));

// Using async/await inside an IIFE so top-level works in Node environments
(async () => {
  const res = await fakeFetch("async/await result");
  console.log("await:", res);
})();

// ---------- 12. Try / Catch (error handling)
console.log("\n--- try / catch ---");
function mayThrow(shouldThrow) {
  if (shouldThrow) throw new Error("Something went wrong");
  return "All good";
}
try {
  console.log(mayThrow(false));
  console.log(mayThrow(true)); // this will jump to catch
} catch (err) {
  console.error("Caught error:", err.message);
}

// ---------- 13. Modules (note)
console.log("\n--- Modules (note) ---");
console.log("Use import/export in ES modules or require/exports in CommonJS.");

// ---------- 14. Small exercises (try these after reading)
/*
  1) Write a function that returns true if a string is a palindrome.
  2) Given an array of user objects, return names of users older than 18.
  3) Create a small module that exports a function and require/import it.
*/

// End of examples — short, practical, and runnable in Node.js
