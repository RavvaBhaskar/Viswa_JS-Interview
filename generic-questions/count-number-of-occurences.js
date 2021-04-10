//method1:
const arr = [1, 1, 2, 1, 2, 3];
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences(arr, 1));

//method2:
var dataset = [2, 2, 4, 2, 6, 4, 7, 8];
var search = 2;

var count = dataset.reduce(function (n, val) {
  return n + (val === search);
}, 0);

console.log(count);

//method 3:
let count = dataset.reduce((n, x) => n + (x === search), 0);
