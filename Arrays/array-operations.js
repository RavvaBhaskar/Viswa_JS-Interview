//Basic operations

//Adding an element to the end of an array

let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.push("Red Sea");

console.log(seas); //[ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

//Adding an element to the beginning of an array
//To add an element to the beginning of an array, you use the unshift() method:

let seas1 = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas1.unshift("Red Sea");

console.log(seas1); //[ 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]

// Removing an element from the end of an array :pop()

let seas2 = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const lastElement = seas2.pop();
console.log(lastElement); //Baltic Sea

//Removing an element from the beginning of an array : shift()
//To remove an element from the beginning of an array, you use the shift() method:
let seas3 = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const firstElement = seas3.shift();

console.log(firstElement); //Black Sea

//Finding an index of an element in the array
let index = seas.indexOf("North Sea");

console.log(index); // 2

//Check if an value is an array
console.log(Array.isArray(seas)); // true
