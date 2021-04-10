//https://www.javascripttutorial.net/javascript-array-sort/

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);

//using compare function :  array.sort(comparefunction)

let numbers2 = [0, 1, 2, 3, 10, 20, 30];
numbers2.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers2);

//using arrow function

let numbers1 = [0, 1, 2, 3, 10, 20, 30];
numbers1.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers1);
