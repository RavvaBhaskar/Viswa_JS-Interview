let firstName = "John";
let fullName = firstName.concat(" ", "Doe");
console.log(fullName); // "John Doe"
console.log(firstName); // "John"

//Extracting substrings :substr(startIndex,[length]);
let str = "JavaScript String";

console.log(str.substr(0, 10)); // "JavaScript"
console.log(str.substr(11, 6)); // "String"

//substring(startIndex,endIndex)
console.log(str.substring(4, 10)); // "Script"

// Locating substrings : string.indexOf(substring,[fromIndex]);

let locatestr = "This is a string";
console.log(locatestr.indexOf("is")); // 2

//The following example uses the fromIndex argument: string.lastIndexOf(substring,[fromIndex])

console.log(locatestr.indexOf("is", 3)); //5

console.log(str.lastIndexOf("is")); // 5

console.log(str.lastIndexOf("are")); // -1

//Removing whitespace characters

let rawString = " Hi  ";
let strippedString = rawString.trim();
console.log(strippedString); // "Hi"

//ES6 introduced two new methods for removing whitespace characters from a string:trimStart() , trimEnd()

// /Changing cases : toLowerCase() and toUpperCase()

let greeting = "Hello";
console.log(greeting.toLowerCase()); // 'hello'
console.log(greeting.toUpperCase()); // 'HELLO';
