"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.toString = function () {
        for (var i = 0; i < this.books.length; i++) {
            return this.books[i].toString();
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        for (var i = 0; i < this.books.length; i++)
            if (this.books[i].getAuthor() == author) {
                return this.books[i].getTitle();
            }
    };
    return Library;
}());
exports.Library = Library;
//cuando no podria acceder a esos atributos????EJEMPLOS!  
// let libro1:Book = new Book("Harry Potter", 368, "22541444784512", "Tomás Martinez claramonte", "Espasa")
//     let libro2:Book = new Book("Harry Potter", 368, "22541444784512", "Tomás Martinez claramonte", "Espasa")
//     let library1: Library= new Library([libro1, libro2], "Colon", "Pepito")
// library1.toString()
//Puedo acceder a atributos de otra clase si la he importado a mi clase? (por ejemplo this title de arriba)
// con el get tambien se puede hacer console.log o es siempre return?
// for (let i=0; i<this.books.length; i++){
// this.books[i].toString():void{
// console.log("Title - " + this.title + "\n" + "Number of pages - " + this.nPages.toString() + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial)
//  }
//Si importas uuna clase, se pueden sus metodos como si fueran de la nueva clase, siempre que sean publicos y siempre que tengas atributos que sean de tipo de la clase importada. En este caso se puede utilizar sobre books(yo string()), pero no sobre manager.
