let animals = ["cat", "dog", "elephant", "bee", "ant"];

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(animals);
