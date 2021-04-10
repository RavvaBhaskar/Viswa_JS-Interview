//Task : find the city whose population is greater than 3 million

let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

//conventional for loop
let bigCities_using_for = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population > 3000000) {
    bigCities_using_for.push(cities[i]);
  }
}
console.log(bigCities_using_for);

/** output
 * [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
 */

//using filter

let bigCities = cities.filter(function (e) {
  return e.population > 3000000;
});
console.log(bigCities);

//using arrow functions

let bigCities_arrow = cities.filter((city) => city.population > 3000000);
console.log(bigCities_arrow);

/**
 * syntax : arrayObject.filter(callback, contextObject);
function callback(currentElement, index, array){
   // ...
}
 */

/**Because the filter() method returns an a new array,
 *  you can chain the result with other iterative methods such as sort() and map(). */

cities
  .filter((city) => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map((city) => console.log(city.name + ":" + city.population));
/**output 
 * Philadelphia:1526006
Houston:2099451
Chicago:2695598
 */
/**
 * he following example illustrates the use of the contextObject argument that specifies
 * an object which can be referenced in the callback() function using the this keyword.
 */

function isInRange(value) {
  if (typeof value !== "number") {
    return false;
  }
  return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, "JavaScript filter", undefined, "example"];

let range = {
  lower: 1,
  upper: 10,
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [10, 1, 5]
