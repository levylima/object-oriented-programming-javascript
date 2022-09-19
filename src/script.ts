import PromptSync = require('prompt-sync');



class Customer {
    public name: string
    public surname: string
    public age: number
    public country: string
    public sex: string

    public searchProducts () {
        console.log('Listagem de diversos produtos');
    }

    public buyItem () {
        console.log('Item sold!');
    }

    public changeItem () {
        console.log('Item trocado!')
    }

    public birthDate () {
        this.age++
        console.log('Usuário fez aniversário!')
    }
}
const people: Customer = new Customer();

people.name = prompt('Digite seu nome: ');
people.surname = prompt('Digite seu sobrenome: ');
people.age = Number(prompt('Digite sua idade: '));
people.country = prompt('Digite seu país: ');
people.sex = prompt('Digite seu sexo: ');



console.log(`Customer name: ${people.name} ${people.surname}`);
console.log(`Customer age: ${people.age}`);
console.log(`Customer country: ${people.country}`);
console.log(`Customer sex: ${people.sex}`);
people.searchProducts();
people.buyItem ();
people.changeItem ();
people.birthDate ();