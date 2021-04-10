//refer Optimizing JavaScript Array sort() method :refer https://www.javascripttutorial.net/javascript-array-sort/

let rivers = ["Nile", "Amazon", "Congo", "Mississippi", "Rio-Grande"];

// temporary array holds objects with position
// and length of element
var lengths = rivers.map(function (e, i) {
  return { index: i, value: e.length };
});

// sorting the lengths array containing the lengths of
// river names
lengths.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
  return rivers[e.index];
});

console.log(sortedRivers);
