//how to check whether all the array elements pass a test using the JavaScript Array every() method.

//conventional way of checking whether numbers array are greate than 0

let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) {
    result = false;
    break;
  }
}
console.log(result); //true

//using javascript every() method

let numbers2 = [1, 3, 5];
let result2 = numbers2.every(function (e) {
  return e > 0;
});

console.log(result); //true

//By using the ES6 arrow functions, the code can be even shorter:

let numbers1 = [1, 3, 5];

let result1 = numbers1.every((e) => e > 0);

console.log(result1); //true

//Syntax : arrayObject.every(callback[, thisArg])
/**
 * function callback(currentElement, index, array){
   //...
}
 */

//Caution: Empty arrays : If you call the every() method on an empty array, the method will always return true for any condition.
// For example:

let gtZero = [].every((e) => e > 0); // any condition
let ltZero = [].every((e) => e < 0); // any condition

console.log("gtZero:", gtZero);
console.log("ltZero:", ltZero);
