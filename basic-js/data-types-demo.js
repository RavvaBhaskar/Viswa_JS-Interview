let counter = 120; // counter is a number
counter = false; // counter is now a boolean
counter = "foo"; // counter is now a string

let counter = 120; // counter is a number
console.log(typeof counter); // "number"

counter = false; // counter is now a boolean
console.log(typeof counter); // "boolean"

counter = "Hi"; // counter is now a string
console.log(typeof counter); // "string"

let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined

console.log(typeof undeclaredVar); // undefined

console.log(null == undefined); // true
console.log(Symbol() == Symbol()); // false
let s2 = Symbol("event.save");
console.log(s2.toString()); // Symbol(event.save)
const click = Symbol("click");
