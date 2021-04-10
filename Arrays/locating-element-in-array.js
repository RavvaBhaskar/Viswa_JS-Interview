//Array.indexOf(searchElement, fromIndex)
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
console.log(scores.indexOf(20, -1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20, -5)); // 1 (fromIndex = 6+ (-5) = 1)

/**
 * The following statement returns -1 even though the first element of the guests array and the searchElement have the same values
 *  in the name and ages properties. This is because they are two different objects
 */
var guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

console.log(
  guests.indexOf({
    name: "John Doe",
    age: 30,
  })
); // -1

///Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
console.log(scores.lastIndexOf(10)); // 3
console.log(scores.lastIndexOf(20)); // 5
console.log(scores.lastIndexOf(50)); // -1
