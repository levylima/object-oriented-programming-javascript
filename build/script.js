"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.searchProducts = function () {
        console.log('Listagem de diversos produtos');
    };
    Customer.prototype.buyItem = function () {
        console.log('Item sold!');
    };
    Customer.prototype.changeItem = function () {
        console.log('Item trocado!');
    };
    Customer.prototype.birthDate = function () {
        this.age++;
        console.log('Usuário fez aniversário!');
    };
    return Customer;
}());
var people = new Customer();
people.name = prompt('Digite seu nome: ');
people.surname = prompt('Digite seu sobrenome: ');
people.age = Number(prompt('Digite sua idade: '));
people.country = prompt('Digite seu país: ');
people.sex = prompt('Digite seu sexo: ');
console.log("Customer name: ".concat(people.name, " ").concat(people.surname));
console.log("Customer age: ".concat(people.age));
console.log("Customer country: ".concat(people.country));
console.log("Customer sex: ".concat(people.sex));
people.searchProducts();
people.buyItem();
people.changeItem();
people.birthDate();
