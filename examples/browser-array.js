// examples/browser-array.js
// Browser-friendly examples demonstrating arrays, destructuring and spread/rest.
// This module populates the page with stringified example outputs so you can
// open `index.html` in a browser to see the results styled with `index.css`.

function write(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
}

// Arrays
const fruits = ['Apple', 'Banana', 'Cherry'];
let arraysOutput = '';
arraysOutput += `fruits = ${JSON.stringify(fruits)}\n`;
arraysOutput += `first item = ${fruits[0]}\n`;

// Destructuring
const [first, second, third] = fruits;
arraysOutput += `destructured => first: ${first}, second: ${second}, third: ${third}\n`;

// Skip and defaults
const [a, , c2 = 'Default'] = fruits;
arraysOutput += `skip and default => a: ${a}, c2: ${c2}\n`;

// Swap example
let x = 1, y = 2;
[x, y] = [y, x];
arraysOutput += `after swap => x: ${x}, y: ${y}\n`;

write('arrays-output', arraysOutput);

// Object destructuring
const user = { id: 1, name: 'Lee', role: 'student' };
const { name: userName, role = 'guest', missing = 'N/A' } = user;
const destructuringOutput = `userName: ${userName}\nrole: ${role}\nmissing: ${missing}`;
write('destructuring-output', destructuringOutput);

// Spread & Rest
const more = ['Durian', ...fruits, 'Elderberry'];
const copy = [...fruits];

function joinWith(separator, ...items) {
  return items.join(separator);
}
const operatorsOutput = `combined with spread: ${JSON.stringify(more)}\nshallow copy: ${JSON.stringify(copy)}\njoinWith(',', 'a','b','c'): ${joinWith(',', 'a','b','c')}`;
write('operators-output', operatorsOutput);

// Small interactive demo: add a button to show an alert (if you want)
// (left commented out so the page remains simple)
// const b = document.createElement('button');
// b.textContent = 'Click me';
// b.addEventListener('click', () => alert('Button clicked!'));
// document.querySelector('main').appendChild(b);
