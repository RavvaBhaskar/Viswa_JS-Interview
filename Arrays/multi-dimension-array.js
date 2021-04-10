//https://www.javascripttutorial.net/javascript-multidimensional-array/

let activities = [];
activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
//In the activities array, the first dimension represents the activity
//and the second one shows the number of hours spent per day for each.

console.table(activities);
console.log(activities[0][1]); // 9

//Adding elements to the JavaScript multidimensional array
activities.push(["Study", 2]);

console.table(activities);

//To insert an element in the middle of the array, you use the splice() method.
//The following inserts an element in the second position of the activities array:
activities.splice(1, 0, ["Programming", 2]);

console.table(activities);

//TASK : calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = percentage + "%";
});

console.table(activities);
activities.pop();

console.table(activities);
//------------
activities.forEach((activity) => {
  activity.pop(2);
});

console.table(activities);

//Iterating over elements of the JavaScript multidimensional array
// loop the outer array
for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  var innerArrayLength = activities[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("[" + i + "," + j + "] = " + activities[i][j]);
  }
}

//Or you can use the forEach() method twice:

activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data);
  });
});
