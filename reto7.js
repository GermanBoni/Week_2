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

//el printAll de arriba, unicamente afecta a la clase person? o es tipo una funcion que puedo usar para otras clases? Como hago que el atributo people sea un array de los objetos de la clase Person???haciendo referencia al metodo printall?
//falta importar la clase person a este archivo. como se importan las clases? se pueden immportar variables y clases?