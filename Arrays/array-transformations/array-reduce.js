//task :  calculate the total of elements of the array
let numbers = [1, 2, 3];

//using for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); //6

//using reduce

let sum_reduce = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(sum_reduce); // 6

//syntax : arayObject.reduce(reducer [, initialValue])
//function reducer(accumulator, currentValue, currentIndex, array){}

//reduceRight : The reduce() method starts at the first element and travels toward the last, whereas the reduceRight() method starts at the last element and travels toward the first.

let sum3 = numbers.reduceRight(function (acc, curr) {
  console.log("acc: ", acc, "curr:", curr);
  return acc + curr;
});
console.log(sum3);
