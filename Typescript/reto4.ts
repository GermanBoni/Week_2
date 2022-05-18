
class Book{

    private title:string
    private nPages:number
    private isbn:string
    private author:string
    private editorial:string

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title=title
        this.nPages=nPages
        this.isbn=isbn
        this.author=author
        this.editorial=editorial
    }

    public setTitle(title:string):void{
        this.title=title
    }
    public setNpages(nPages:number):void{
        this.nPages=nPages
    }
    public setIsbn(isbn:string):void{
        this.isbn=isbn
    }
    public setAuthor(author:string):void{
        this.author=author
    }
    public setEditorial(editorial:string):void{
        this.editorial=editorial
    }

    //En el set, tengo que decir el parametro de dentro que tipo de dato es? o este parametro corresponde al parametro definido en el constructor?

    public getTitle():string{
        return this.title
    }
    public getNpages():number{
        return this.nPages
    }
    public getIsbn():string{
        return this.isbn
    }
    public getAuthor():string{
        return this.author
    }
    public getEditorial():string{
        return this.editorial
    }

    toString():void{
       console.log("Title - " + this.title + "\n" + "Number of pages- " + this.nPages.toString() +
        }
}