let str1 = "Hi";
let greeting = "Hello";
//template literals : https://www.javascripttutorial.net/es6/javascript-template-literals/

let name = "John";
let message = `Hello ${name}`;
console.log(message);

//escaping special characters

/**
 * Windows line break: '\r\n'
Unix line break: '\n'
Tab: '\t'
Backslash '\'
 */

let str2 = "I'm a string!";

//length of string

let str3 = "Good Morning!";
console.log(str3.length);

//accessing characters

let str4 = "Hello";
console.log(str4[0]); // "H"

// access the last character of the string,

let str5 = "Hello";
console.log(str5[str5.length - 1]); // "o"

//Concatenating strings via + operator

let name1 = "John";
let str6 = "Hello " + name1;

console.log(str6); // "Hello John"

let className = "btn";
className += " btn-primary";
className += " none";

console.log(className); //btn btn-primary none

//Converting values to string
let status = false;
let str7 = status.toString(); // "false"
let back = Boolean(str7); // true

//String type
let nstr = new String("JavaScript String Type");
console.log(nstr.length); // 22
console.log(nstr.valueOf(), "the value is--line56");
console.log(nstr.toString());
console.log(nstr.toLocaleString());
console.log(nstr[0]); // J
console.log(nstr.charAt(0)); // J
console.log("literal string".toUpperCase());
