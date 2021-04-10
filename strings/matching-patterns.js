/**The match() method allows you to match a string with a specified regular expression
 *  and get an array of results.

 */

//If the global flag (g) is not set, the element zero of the array contains the entire match. Here is an example:
//In this example, the pattern matches any number in the expr string.

let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]); // "1"

//In case the global flag ( g) is set, the elements of the result array contain all matches as follows:
//In this example, the matches array contains all matches including 1, 2 and 3 in the  expr string.

matches = expr.match(/\d+/g);
matches.forEach(function (m) {
  console.log(m);
});
// "1"
// "2"
// "3"

//search pattern : Similar to the match() method, the search() method accepts a regular expression and returns the position
//of the string where the first match found. In case no match is found, it returns -1.
let str = "This is a test of search()";
let pos = str.search(/is/);
console.log(pos); // 2

//replace substrings : string.replace(regularExpression, replaceText)
let str = "the baby kicks the ball";
// replace "the" with "a"
let newStr = str.replace(/the/g, "a");
console.log(newStr); // "a baby kicks a ball"
console.log(str); // "the baby kicks the ball"

newStr = str.replace("kicks", "holds");
console.log(newStr); // "the baby holds the ball"
