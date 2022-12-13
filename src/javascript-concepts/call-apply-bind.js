let name = {
  firstName: "Ayush",
  lastName: "Bhattacharya"
};

let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + " " + state
  );
};

printFullName.call(name, "Chennai", "Tamil Nadu");

let name2 = {
  firstName: "Rohan",
  lastName: "Joshi"
};

//function borrowing
printFullName.call(name2, "Kasol");
printFullName.apply(name2, ["Kasol", "Himachal Pradesh"]);

//bind method
let printMyName = printFullName.bind(name, "Chennai", "Tamil Nadu");
console.log(printMyName());
