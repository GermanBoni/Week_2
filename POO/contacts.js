class Contacts{

    constructor(){
        this.people = []
    }

    printPersons(){
        for (let i=0; i<this.people.length; i++){
            this.people[i].printAll() 
        }
    }
}

module.exports = {Contacts}

//el printAll de arriba, unicamente afecta a la clase person? o es tipo una funcion que puedo usar para otras clases? Como hago que el atributo people sea un array de los objetos de la clase Person???haciendo referencia al metodo printall?
//falta importar la clase person a este archivo. como se importan las clases? se pueden immportar variables y clases?

//Para que sirven los archivos Node, es decir json? para que se hace el ipm init?
//el printAll de arriba, unicamente afecta a la clase person? o es tipo una funcion que puedo usar para otras clases? Como hago que el atributo people sea un array de los objetos de la clase Person???haciendo referencia al metodo printall?
//falta importar la clase person a este archivo. como se importan las clases? se pueden immportar variables y clases?
//Nose como enlazar todo para poder relacionar esta clase con la otra.
//Hay que exportar todas las clases a todos los archivos?
//diferencias entra exportar clases y funciones en js? y en ts?
//porque no me deja subit los cambios al reporsitorio online???