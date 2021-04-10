let str = "You do not know what you do not know until you know.";
let substr = "know";

let count = 0;

let index = str.indexOf(substr);
while (index !== -1) {
  count++;
  index = str.indexOf(substr, index + 1);
}

console.log(count); //3
