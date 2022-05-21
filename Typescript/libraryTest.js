"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var Book_1 = require("./Book");
var libro1 = new Book_1.Book("Harry Potter1", 368, "22541444784512", "Tomás Martinez", "Espasa");
var libro2 = new Book_1.Book("Harry Potter2", 368, "22541444784512", "Tomás", "Espasa");
var libro3 = new Book_1.Book("Harry Potter3", 368, "22541444784512", "Pedro claramonte", "Espasa");
var libro4 = new Book_1.Book("Harry Potter4", 368, "22541444784512", "Tomás Martinez claramonte", "Espasa");
var libreria1 = new library_1.Library([libro1, libro2, libro3, libro4], "Mallorca", "Pepe");
// console.log(libreria1.getAddress())
// console.log(libreria1.getManager());
// libreria1.setAddress("Valencia")
// libreria1.setManager("Antonio")
// console.log(libreria1.getAddress())
// console.log(libreria1.getManager());
console.log(libreria1.getNumberOfBooks());
console.log(libreria1.findByAuthor("Pedro claramonte"));
