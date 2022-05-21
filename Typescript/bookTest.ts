
import { Book } from "./Book";

let libro1:Book = new Book("Harry Potter", 368, "22541444784512", "Tomás Martinez claramonte", "Espasa")

console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getNpages());
console.log(libro1.getTitle());
console.log(libro1.toString())

libro1.setAuthor("Antonio Ruíz Safont")
libro1.setEditorial("Bromera")
libro1.setIsbn("ggggggggg43525")
libro1.setNpages(600)
libro1.setTitle("Harry Poter 2")


console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getNpages());
console.log(libro1.getTitle());
console.log(libro1.toString())

console.log(libro1.toString())

// realmente con toString puedo acceder a los atributos, aunque sean privados, porque estoy utilizando un metodo de esa clase. Lo que no podria es acceder a esos atributos desde una clase difernte, pero si usando sus metodods si la clase esta exportada????




