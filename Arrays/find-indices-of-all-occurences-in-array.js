var scores = [10, 20, 30, 10, 40, 20];
function find(needle, haystack) {
  var results = [];
  var idx = haystack.indexOf(needle);
  while (idx != -1) {
    results.push(idx);
    idx = haystack.indexOf(needle, idx + 1);
  }
  return results;
}

console.log(find(10, scores)); // [0, 3]
