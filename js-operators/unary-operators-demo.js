/**
 * A unary operator works on one operand
 * 
 * 
 * Unary plus (+)  – convert an operand into a number
Unary minus (-) – convert an operand into a number and negate the value after that.
prefix / postfix increments (++) – add one to its operand
prefix / postfix decrements (--) – subtract one from its operand.
 */

let a = 10;
a = +a; // 10
a = -a; // -10

let f = false,
  t = true;
console.log(+f); // 0
console.log(+t); // 1

let dan = 8;
++dan;
console.log(dan); // 9
console.log(++dan); // 10
console.log(dan++); // 10
console.log(dan++); //11

let dan = 9;
--dan;
console.log(dan); // 8

let x = 10,
  y = 20;
let z = --x + y;
console.log(z); // 29
