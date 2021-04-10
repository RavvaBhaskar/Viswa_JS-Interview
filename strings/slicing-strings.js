//The slice() method returns a substr from the startIndex to the endIndex in the str:
//let substr = str.slice(startIndex [, endIndex ]);

let email = "john@example.com";
let localPart = email.slice(0, email.indexOf("@"));

console.log(localPart); //john
