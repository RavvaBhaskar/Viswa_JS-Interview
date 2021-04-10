let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let newObject = JSON.parse(JSON.stringify(person));

newObject.address.city = "Delhi";
console.log(newObject);
console.log(person);
