
const {Person} = require ("./person")
const {Contacts} = require ("./contacts")

let juan = new Person (1.85, 84, "Rubio", "Azules", 1993, ["Correr", "Leer", "Futbol"])
let lucas = new Person (1.72, 73, "Rubio", "Azules", 1994, ["Piano", "Fiesta", "Baloncesto"])

let agenda = new Contacts()

agenda.people=[juan, lucas]

// console.log(agenda.people);
agenda.printPersons();