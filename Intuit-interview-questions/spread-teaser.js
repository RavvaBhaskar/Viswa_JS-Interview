function foo(a, b, ...c) {
  console.log([a, b, ...c]);
}
foo(1, 2, 3, 4, 4, 5, 5, 6);

function foo(a, b, ...c) {
  console.log([a, ...c, b]);
}
foo(1, 2, 3, 4, 4, 5, 5, 6);
