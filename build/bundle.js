var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var people = new Customer();
people.name = "Levy";
people.surname = "Lima";
people.age = 23;
people.country = "Brazil";
people.sex = "Masculine";
console.log("Customer name: ".concat(people.name, " ").concat(people.surname));
console.log("Customer age: ".concat(people.age));
console.log("Customer country: ".concat(people.country));
console.log("Customer sex: ".concat(people.sex));
