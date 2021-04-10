/**
 * When executing JavaScript code, the JavaScript engine goes through two phases:

Parsing
Execution
In the parsing phase, The JavaScript engine moves all variable declarations to the top of the file if the variables are global, or to the top of a function if the variables are declared in the function.

In the execution phase, the JavaScript engine assigns values to variables and execute the code.

Hoisting is a mechanism that the JavaScript engine moves all the variable declarations to the top of their scopes, either function or global scopes.
 */

console.log(message); // undefined
var message;

//example2

/***
 * The JavaScript engine moves only the declaration of the variables to the top. However, it keeps the initial assignment of the variable remains intact. As a result, the code above is equivalent to the following code:
 */
console.log(counter);
var counter = 100;
