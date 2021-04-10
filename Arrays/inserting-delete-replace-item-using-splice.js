//JavaScript Array’s splice() method to delete existing elements, insert new elements, and replace elements in an array

//Delete : To  delete elements in an array, you pass two arguments into the splice() method as follows:

//Array.splice(position,num);  The position specifies the position of the first item to delete and the num argument determines the number of elements to delete.

let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]

//Inserting elements using JavaScript Array splice() method
//Array.splice(position,0,new_element_1,new_element_2,...); : The second argument is zero (0) that instructs the splice() method to not delete any array elements.

let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

//Replacing elements using JavaScript Array splice() method
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
