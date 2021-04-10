//String.prototype.concat() method accepts a list of strings and returns a new string that contains the combined strings:
/**
 * string.concat(str1, [...strN]);
 */
let greeting = "Hi";
let message = greeting.concat(" ", "John");

console.log(message);

//Concatenating an array of strings

let colors = ["Blue", " ", "Green", " ", "Teal"];
let result = "".concat(...colors);

console.log(result);
