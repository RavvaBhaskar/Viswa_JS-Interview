// sorting array with mixed cases

let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];

mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});

console.log(mixedCaseAnimals);
