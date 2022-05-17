class Person{

    constructor(altura, peso, colorPelo, colorOjos, yearOfBirth, hobbies){

        this.altura = altura,
        this.peso = peso,
        this.colorPelo = colorPelo,
        this.colorOjos = colorOjos,
        this.yearOfBirth = yearOfBirth,
        this.hobbies = hobbies
    }

    calculoIMC(){

        return this.peso / (this.altura ** 2)
    }

    calculoEdad(añoActual){

        return añoActual - this.yearOfBirth
    }

    printAll(){
        
        console.log("altura - " + this.altura)
        console.log("peso - " + this.peso)
        console.log("colorPelo - " + this.colorPelo)
        console.log("colorOjos - " + this.colorOjos)
        console.log("yearOfBirth - " + this.yearOfBirth)
    }

    printHobbies(){
        
        for (let i = 0; i < this.hobbies.length; i++){

            console.log (this.hobbies[i])
        }
    }
}

module.exports = {Person}



