
const {Person} = require ("./person")

let Mario = new Person (1.82, 85, "Negro", "Marrón", 1993, ["leer", "padel", "videojuegos"])

console.log(Mario.peso)
console.log (Mario.altura)
console.log (Mario.colorPelo)
console.log (Mario.colorOjos)
console.log (Mario.yearOfBirth)
console.log (Mario.hobbies)

console.log(Mario.calculoIMC())
console.log(Mario.calculoEdad(2022))
console.log(Mario.printAll())
console.log(Mario.printHobbies())








