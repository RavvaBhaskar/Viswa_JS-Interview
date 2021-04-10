let odds = [1, 3, 5];
let evens = [2, 4, 6];
// merge odds and evens array
let combined = odds.concat(evens);

console.log("Result:", combined);
console.log("Odds:", odds);

/**
 * Result: [ 1, 3, 5, 2, 4, 6 ]
Odds: [ 1, 3, 5 ]
 */

// merge odds and evens array
let combined1 = [].concat(odds, evens);

console.log(combined1);

let upper = ["A", "B", "C"];
let lower = ["a", "b", "c"];
let digits = [1, 2, 3];
let alphanumerics = upper.concat(lower, digits); //['A', 'B', 'C', 'a',  'b', 'c', 1,   2,  3]

//When you don’t pass any argument into the concat() method, it simply clones the array and returns it:

let colors = ["red", "green", "blue"];
let rgb = colors.concat();
console.log(rgb);

let rgb1 = ["red", "green", "blue"];
let moreColors = rgb.concat("yellow", "magento");
console.log(moreColors);

//using ES6 spread Operator

let odds = [1, 3, 5];
let evens = [2, 4, 6];
let combined = [...odds, ...evens];
console.log(combined); //[ 1, 3, 5, 2, 4, 6 ]
