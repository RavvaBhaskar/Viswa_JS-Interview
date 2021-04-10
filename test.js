// const transform = (input) => {
//   let i = 0,
//     count_a = 0;
//   count_b = 0;

//   let currentChar = input.charAt(0);
//   let finalChar = "";
//   let processNewChar = false;

//   while (input.charAt(i) === currentChar) {
//     i++;
//     count_a++;
//   }
//   processNewChar = input.charAt(i);

//   while (input.charAt(i) == processNewChar) {
//     i++;
//     count_b++;
//   }

//   finarvar = currentChar + count_a + processNewChar + count_b;

//   return finarvar;
// };

// console.log(transform("aaabb"));

let a = [1, 2, 3];
let appendvar = "";
for (let i in a) {
  appendvar = appendvar + " " + a[i];
}
console.log(appendvar);
