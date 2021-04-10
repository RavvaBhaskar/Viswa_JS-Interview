/**
 * how to use the JavaScript Array some() method to check if at least one element in the array passes a test.
 */
//Sometimes, you want to check if an array has at least one element that meets a specified condition.

//for loop

let marks = [4, 5, 7, 9, 10, 3];

let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}

console.log(lessThanFive); //true

//using some

let marks = [4, 5, 7, 9, 10, 3];

lessThanFive = marks.some(function (e) {
  return e < 5;
});

console.log(lessThanFive);

//syntax : arrayObject.some(callback[, thisArg]);
//function callback(currentElement [[, currentIndex], array]){ // ...}
//Caution: Empty arrays
/**
 *
 * If you call the some() method on an empty array, the result is always false regardless of any condition. For example:
 */
let result = [].some((e) => e > 0);
console.log(result); //false

result = [].some((e) => e <= 0);
console.log(result); //false
