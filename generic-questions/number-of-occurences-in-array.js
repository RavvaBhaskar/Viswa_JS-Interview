const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const aCount = new Map(
  [...new Set(a)].map((x) => [x, a.filter((y) => y === x).length])
);
console.log(aCount.get(5)); // 3
console.log(aCount.get(2));
console.log(aCount.get(9));
console.log(aCount.get(4));
console.log(aCount.get(0));
