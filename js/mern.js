// basic of the js with mern context guide 

console.log("Hello, World!");
// function in js
//  const name = "Alice";
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// variable in js
let age = 12;
const pi = 3.14;
var isStudent = true;
// let age;
// conditional statement in js
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// loop in js
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}
// array in js
let fruits = ["Apple", "Banana", "Cherry"];
console.log("First fruit: " + fruits[0]);
// object in js
let person = {
  name: "Bob",
  age: 30,
  isStudent: false,
};
console.log("Person's name: " + person.age);

// event handling in js in  this example we are adding a click event listener to a button with the id "myButton" what it will do is when the button is clicked it will show an alert message saying "Button clicked!" but the dcocument.getElementById("myButton") is used to get the button element from the HTML document and then we use addEventListener to attach the click event to it.
// Guard DOM access so running this file in Node doesn't crash.
if (typeof document !== "undefined" && document.getElementById) {
  const myButton = document.getElementById("myButton");
  if (myButton) {
    myButton.addEventListener("click", function () {
      alert("Button clicked!");
    });
  }
} else {
  console.log("DOM is not available.");
}

//  other important parts of js

//  Running under Node (no DOM). Skip browser-only code.
// If you intended to run DOM code in Node, consider using `jsdom`
// or move this code into a front-end script included in HTML.

// async programming in js async programming allows you to perform tasks without blocking the main thread. In this example, we define an async function fetchData that simulates fetching data from a server using a Promise and setTimeout. When the data is fetched, it logs the result to the console.
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}
// Using async/await to call the fetchData function
async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData(); // promise in js A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In this example, we create a Promise that simulates a task that takes 2 seconds to complete. If the task is successful, it resolves with a success message; otherwise, it rejects with an error message. We then use the .then() method to handle the resolved value and the .catch() method to handle any errors.
let myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous task
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected.");
    }
  }, 2000);
});

// Handling the Promise
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//

// ------------------------------------------------------------------
// MERN learning notes (commented) — safe to keep here as comments
// ------------------------------------------------------------------
// The block below is a step-by-step MERN learning guide with short code
// snippets and comments. These lines are comments only and won't run.
// Use this as a quick reference while you learn the stack.

/*
MERN Stack — step-by-step (comments and small examples)

1) JavaScript foundations
  // variables, functions, arrays, objects, promises, async/await

2) Node.js + npm
  // Initialize project:
  // npm init -y

3) Express server (example)
  // const express = require('express');
  // const app = express();
  // app.use(express.json());
  // app.get('/api/hello', (req, res) => res.json({ msg: 'Hello from API' }));
  // app.listen(3000, () => console.log('Server listening on 3000'));

4) MongoDB + Mongoose (example)
  // const mongoose = require('mongoose');
  // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  // const UserSchema = new mongoose.Schema({ name: String, email: String });
  // const User = mongoose.model('User', UserSchema);

5) React basics (example snippet)
  // function App() {
  //   const [items, setItems] = React.useState([]);
  //   React.useEffect(() => { fetch('/api/items').then(r => r.json()).then(setItems); }, []);
  //   return <div>{items.map(i => <div key={i._id}>{i.title}</div>)}</div>;
  // }

6) Connecting client and server
  // Use fetch or axios in React to call Express endpoints.
  // Make sure CORS is handled in development (npm install cors; app.use(require('cors')())).

7) Authentication notes
  // Store passwords as hashes (bcrypt). Use JWT for stateless APIs.

8) Deployment tips
  // Use environment variables; build the React app and serve static files from Express or deploy separately (Netlify/Vercel for frontend, Render/Heroku for backend).

9) Suggested small project (todo)
  // - API: /api/todos (CRUD)
  // - Frontend: React app to show and add todos
  // - Add user auth and persist user-specific todos

10) Learning practice
  // Build small focused features, commit often, and deploy a basic version early.

*/
