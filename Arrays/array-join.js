//Array.prototype.join([separator])
const cssClasses = ["btn", "btn-primary", "btn-active"];
const btnClass = cssClasses.join(" ");

console.log(btnClass); //btn btn-primary btn-active

//Using the JavaScript Array join() method to replace all occurrences of a string

const title = "JavaScript array join example";
const url = title.split(" ").join("-").toLowerCase();

console.log(url); //javascript-array-join-example
