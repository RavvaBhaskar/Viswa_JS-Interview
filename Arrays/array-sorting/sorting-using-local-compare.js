//Sorting an array of strings with non-ASCII characters
let animaux = ["zèbre", "abeille", "écureuil", "chat"];
animaux.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(animaux);

let animaux1 = ["zèbre", "abeille", "écureuil", "chat"];
animaux1.sort();

console.log(animaux1, "wrong default sorting sample");
