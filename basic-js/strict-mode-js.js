"use strict";

function say() {
  message = "Hi"; // ReferenceError
  console.log(message);
}
say(); // Hi
console.log(message); // Hi
