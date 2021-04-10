//The String.prototype.split() divides a string into an array of substrings:split([separator, [,limit]]);

let str = "JavaScript String split()";
let substrings = str.split(" ");

console.log(substrings); //["JavaScript", "String", "split()"]

// Returning a limited number of substrings example
substrings = str.split(" ", 2);

console.log(substrings); //["JavaScript", "String"]

//Split string using a regular expression example

let paragraph = "Good Morning! How are you? This is John. John is my friend.";
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences); //["Good Morning", " How are you", " This is John", " John is my friend", ""]

sentences = paragraph.split(/([!,?,.])/);
console.log(sentences); //["Good Morning", "!", " How are you", "?", " This is John", ".", " John is my friend", ".", ""]
