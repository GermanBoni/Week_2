
import { Book } from "./Book";

class Library{

    private books:Book[]
    private address:string
    private manager:string

    constructor(books:Book[], address:string, manager:string){

        this.books=books
        this.address=address
        this.manager=address
    }

    public getAddress():string{
        return this.address
    }
    public getManager():string{
        return this.manager
    }

    public setAddress(address:string):void{
        this.address=address
    }
    public setManager(manager:string):void{
        this.manager=manager
    }

    getBooks():Book[]{
        return this.books
    }
//Con el getBooks de arriba he hecho publico el atributo books en todo el archivo?
    
    public toString():void{
            for (let i=0; i<this.books.length; i++){
                
                console.log("Title - " + this.title + "\n" + "Number of pages - " + this.nPages.toString() + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial) 
            }
        }
    }
}
//Puedo acceder a atributos de otra clase si la he importado a mi clase? (por ejemplo this title de arriba)
// con el get tambien se puede hacer console.log o es siempre return?