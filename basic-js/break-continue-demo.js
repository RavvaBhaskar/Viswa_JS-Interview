for (var i = 1; i < 10; i++) {
  if (i % 3 == 0) {
    break;
  }
}
console.log(i); // 3

//labeled break using break label;
let iterations = 0;
top: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    iterations++;
    if (i === 2 && j === 2) {
      break top;
    }
  }
}
console.log(iterations); // 13

// continue statement has two forms: labeled and unlabeled.

/**
 * for (var i = 0; i < count; i++) {
    if (condition)
        continue; // Jumps to expression: i++
    // more statement here
}
 */

/**
  * while (expression){ // continue jumps here
    if (condition) {
        continue; // Jumps to expression
    }
    // more statements here
    // ...
}
  */

/**
   * do{
    if (condition) {
        continue; // Jumps to expression
    }
    // more statements here
    // ...
} while(expression); // continue jumps here
   */

let s = "This is a JavaScript continue statement demo.";
let counter = 0;
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) != "s") {
    continue;
  }
  //
  counter++;
}
console.log("The number of s found in the string is " + counter);

//using continue label;

// continue with a label
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i == 2 && j == 2) {
      console.log("continue to outer");
      continue outer;
    }
    console.log("[i:" + i + ",j:" + j + "]");
  }
}
