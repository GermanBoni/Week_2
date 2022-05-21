
import { Book } from "./Book";

export class Library{

    private books:Book[]
    private address:string
    private manager:string

    constructor(books:Book[], address:string, manager:string){

        this.books=books
        this.address=address
        this.manager=manager
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

    public toString():string{

        for (let i=0; i<this.books.length; i++){
            
            return this.books[i].toString()
        }
    }

    public getNumberOfBooks():number{
        return this.books.length
    }

    public findByAuthor(author:string){
        for (let i=0; i< this.books.length; i++)
            if (this.books[i].getAuthor() == author){
                return this.books[i].getTitle()
            }
    }
}

 