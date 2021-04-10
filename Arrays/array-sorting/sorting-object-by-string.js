let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

employees.sort(function (x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);
