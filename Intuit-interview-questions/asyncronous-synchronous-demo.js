setTimeout(function foo() {
  console.log(i);
}, 0);

for (var i = 0; i < 2; i++) {
  console.log(i);
}
