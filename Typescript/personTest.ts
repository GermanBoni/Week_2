import {Person} from "./person"

let Juan= new Person("Juanito", 35, "Mallorca")

console.log(Juan.name);
console.log(Juan.age);
console.log(Juan.getAddress())
Juan.printName;
console.log(Juan.yearOfBirth(2022));
Juan.setAddress("Pamplona")
console.log(Juan.getAddress())
