function sum(a) {
  let aggregate = a;
  return function agg(b) {
    console.log(arguments);
    if (arguments.length) {
      aggregate += b;
      return agg;
    }
    return aggregate;
  };
}

console.log(sum(5)(3)(2)());
