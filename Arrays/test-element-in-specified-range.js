// https://www.javascripttutorial.net/javascript-every/

let numbers = [1, 3, 5];

let range = {
  min: 0,
  max: 10,
};

let isInRange = numbers.every(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(isInRange);
