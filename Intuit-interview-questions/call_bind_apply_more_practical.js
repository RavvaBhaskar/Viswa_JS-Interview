let rahulDetails = {
  name: "rahul",
  age: "25",
  Calcsgrossincome: function (workedmonths, paypermonth) {
    return workedmonths * paypermonth;
  },
};

function printDetails(workedmonths, paypermonth) {
  console.log(
    "name" +
      this.name +
      "age :" +
      this.age +
      "income :" +
      this.Calcsgrossincome(workedmonths, paypermonth)
  );
}

printDetails.call(rahulDetails, 6, 30);
printDetails.apply(rahulDetails, [6, 30]);
//The bind() method returns a new function, when invoked, has its this sets to a specific value.
let bindrahul = printDetails.bind(rahulDetails);
bindrahul(6, 30);
