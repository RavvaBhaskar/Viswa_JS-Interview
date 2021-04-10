let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

employees.sort(function (x, y) {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});

console.table(employees);
