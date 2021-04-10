//The slice() returns a new array that contains the elements of the original array

//Clone an array
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice();

//Copy a portion of an array
var colors = ["red", "green", "blue", "yellow", "purple"];
var rgb = colors.slice(0, 3);
console.log(rgb); // ["red", "green", "blue"]

//Convert array-like objects into arrays

function toArray() {
  return Array.prototype.slice.call(arguments);
}

var classification = toArray("A", "B", "C");

console.log(classification); // ["A", "B", "C"]
