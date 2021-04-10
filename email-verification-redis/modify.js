function add(x, y) {
  return x + y;
}

add(1, 5); // 6

function modifyAdd(add, op1) {
  return function (op2) {
    return add(op1, op2);
  };
}

const addFive = modifyAdd(add, 5);
addFive(3); //  8
console.log(addFive(3));

const addSeven = modifyAdd(add, 7);
addSeven(10);
