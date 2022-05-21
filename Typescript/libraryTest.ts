import { Library } from "./library";
import { Book } from "./Book";

let libro1:Book = new Book("Harry Potter1", 368, "22541444784512", "Tomás Martinez", "Espasa")
let libro2:Book = new Book("Harry Potter2", 368, "22541444784512", "Tomás", "Espasa")
let libro3:Book = new Book("Harry Potter3", 368, "22541444784512", "Pedro claramonte", "Espasa")
let libro4:Book = new Book("Harry Potter4", 368, "22541444784512", "Tomás Martinez claramonte", "Espasa")

let libreria1:Library = new Library([libro1, libro2, libro3, libro4], "Mallorca", "Pepe")

console.log(libreria1.getAddress())
console.log(libreria1.getManager());

libreria1.setAddress("Valencia")
libreria1.setManager("Antonio")

console.log(libreria1.getAddress())
console.log(libreria1.getManager());

console.log(libreria1.getNumberOfBooks());
console.log(libreria1.findByAuthor("Pedro claramonte"));






