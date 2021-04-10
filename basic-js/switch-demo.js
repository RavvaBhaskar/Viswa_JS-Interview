/**
 * switch (expression) {
    case value_1:
        statement_1;
        break;
    case value_2:
        statement_2;
        break;
    case value_3:
        statement_3;
        break;
    default:
        default_statement;
}
 */
var day = 3;
var dayName;
switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Tuesday

/**
 * while (expression) {
    // statement
}
 */

let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}

/**
 * do {
  statement(s);
} while(expression);
 */

let count = 0;
do {
  count++;
  console.log("count is:" + count);
} while (count < 10);
