"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var contacto = new contacts_1.Contacts();
var persona1 = new person_1.Person("Ramon", 23, "Valencia");
var persona2 = new person_1.Person("Jaime", 40, "Castellón");
contacto.people = [persona1, persona2];
contacto.printCalendar();
