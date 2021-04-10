let marks = [4, 5, 7, 9, 10, 2];

const range = {
  min: 8,
  max: 10,
};

let result = marks.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(result);
