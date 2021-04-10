/**
 * for (initialization; condition; post-expression) {
    // statements
}
 */

//for loop without any expressions:

for (;;) {
  // statements
}

//simple for loop

for (var counter = 1; counter < 5; counter++) {
  console.log("Inside the loop:" + counter);
}
console.log("Outside the loop:" + counter);

/**output
 * Inside the loop:1
Inside the loop:2
Inside the loop:3
Inside the loop:4
Outside the loop:5
 */

//for loop using let

for (let counter = 1; counter < 5; counter++) {
  console.log("Inside the loop:" + counter);
}
console.log("Outside the loop:" + counter); //ReferenceError: counter is not defined

//The for loop without the initialization part example

var j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}

//The for loop without the condition example

for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) {
    break;
  }
}

//The for loop without any expression example

// initialize j variable
let j = 1;
for (;;) {
  // terminate the loop if j is greater than 10;
  if (j > 10) break;
  console.log(j);
  // increase the counter j
  j += 2;
}

//The for loop without the loop body example

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); //55
