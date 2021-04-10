
const obj1 = {
  name: "Tokyo",
  age: 25,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "12345",
    email: "c@d.com"
  }
};

const obj2 = {
  name: "Denver",
  age: 26,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "12345",
    email: "c@d.com"
  }
};

function getDiff(obj1, obj2) {
  const diffObject = {};
  let obj1key = Object.keys(obj1);
  for (let key of obj1key) {
      if(obj2[key]){
    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
      diffObject[key] = obj2[key];
    }}
    else
    diffObject[key] =  null;

}

  
  return diffObject;
}

console.log(getDiff(obj1, obj2));
