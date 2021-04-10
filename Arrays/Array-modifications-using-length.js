//Dense arrays : A dense array is an array where its elements have contiguous indexes starting at zero.

let colors = ["red", "green", "blue"];
console.log(colors.length); // 3

colors = [];
console.log(colors.length); // 0

//Sparse arrays : For example, the [10,, 20, 30] is a sparse array because the indexes of its elements are 0, 2, and 3.
let numbers = [10, , 20, 30];
console.log(numbers.length); // 4

//Modifying JavaScript Array length property

//Empty an array
const fruits = ["Apple", "Orange", "Strawberry"];
fruits.length = 0;

console.log(fruits); // []

//Remove elements
const fruits1 = ["Apple", "Orange", "Strawberry"];
fruits1.length = 2;

console.log(fruits1); // [ 'Apple', 'Orange' ]

//Make array sparse

const fruits2 = ["Apple", "Orange", "Strawberry"];
fruits2.length = 5;

console.log(fruits2); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]
