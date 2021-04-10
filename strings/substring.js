//The JavaScript String.prototype.substring() returns the part of the string between the start and end indexes:
//str.substring(startIndex [, endIndex])

let str = "JavaScript Substring";
let substring = str.substring(0, 10);

console.log(substring); //JavaScript

//Extracting a substring to the end of the string example

substring = str.substring(11);

console.log(substring); //Substring

//xtracting domain from the email example

let email = "john.doe@gmail.com";
let domain = email.substring(email.indexOf("@") + 1);

console.log(domain); // gmail.com
