function sum(numberOne) {
  var count = numberOne;
  return function by(numberTwo) {
    if (numberTwo === undefined) {
      return count;
    } else {
      count += numberTwo;
      return by;
    }
  };
}
console.log(sum(1)(4)(66)(35)(3)());
