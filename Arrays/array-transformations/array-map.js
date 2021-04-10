//task : calculate the area of each circle and push the result into a new array

let circles = [10, 30, 50];

//using for loop

let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i]);
  areas.push(area);
}
console.log(areas);

//using map
function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
let areas_map = circles.map(circleArea);
console.log(areas_map);

//using arrow function
let areas_arrow = circles.map((radius) =>
  Math.floor(Math.PI * radius * radius)
);
console.log(areas_arrow);

//syntax : arrayObject.map(callback[,contextObject]);
/**
 * function callback(currentElement,index,array){
  // ... 
}
 */

//squart root sample

let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results);
