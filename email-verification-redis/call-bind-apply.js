const car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

console.log(car.displayDetails);
car.displayDetails();

const cardetails = car.displayDetails.bind(car);
cardetails();
