class Customer {
    public name: string
    public surname: string
    public age: number
    public country: string
    public sex: string
}
const people: Customer = new Customer();

people.name = "Levy"
people.surname = "Lima"
people.age = 23
people.country = "Brazil"
people.sex = "Masculine"

console.log(`Customer name: ${people.name} ${people.surname}`)
console.log(`Customer age: ${people.age}`)
console.log(`Customer country: ${people.country}`)
console.log(`Customer sex: ${people.sex}`)