function add(x, y) {
  return x + y;
}

add(1, 5); // 6

//   function modifyAdd(add, op1) {
//     return function (op2) {
//       add(op1, op2);
//     };
//   }

//   function modifyAdd(add, op1) {
//     return function (op2) {
//       return add(op1, op2);
//     };
//   }

const addFive = modifyAdd(add, 5);
addFive(3); //  8

const addSeven = modifyAdd(add, 7);
addSeven(10);

function modifyAdd(add) {
  return function (num1) {
    const parameterValue = num1;
    return function fAdd(num2) {
      if (num2 === undefined) {
        return parameterValue;
      } else {
        parameterValue += num2;
        return parameterValue;
      }
    };
  };

  const fancyAdd = modifyAdd(add);
  console.log(fancyAdd(1)(5)); // 6
}
