
import {Person} from "./person"
import { Contacts } from "./contacts"

let contacto:Contacts= new Contacts()

let persona1:Person= new Person("Ramon", 23, "Valencia")
let persona2:Person= new Person("Jaime", 40, "Castellón")

contacto.people=[persona1, persona2]

contacto.printCalendar()