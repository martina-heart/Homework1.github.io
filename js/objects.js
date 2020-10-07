/* In JavaScript objects are king. If you understand objects , you undertand JavaScript.
KEY or PROPERTY: name,lname, age, addres,country
KEY VALUE OR VALUE: Celine,Dion,51,Canada,Charlemagne,My street,20 */

// let person = {
//   name: "Celine",
//   lname: "Dion",
//   age: 51,
//   addres: {
//     country: "Canada",
//     city: "Charlemagne",
//     street: "My street",
//     number: 20,
//   },
// };

// console.log(person);
// console.log("My name is : " + person.name);
// console.log("I am from : " + person.addres.city);

/* A New OBJECT can be highlighted using a new reserved word:
let o = new object(); */

// let newPerson = new Object();
// newPerson = person;
// newPerson.name = "Martina";
// newPerson.addres.city = "Boston";
// console.log(person);
// console.log("I have changed my name in to: " + person.name);
// console.log("I have changed city: " + person.addres.city);
// console.log("But I haven't change my last name: " + person.lname);

/* When a function appears as the value of a key in an object, it is called the object method.
Na mestoto na (person) moze da go koristime zborot this . Namesto da go pisuvame imeto na klucot pisuvame this . 
*/
// example 1 (with name od Key) :
// let person = {
//   name: "Celine",
//   lname: "Dion",
//   age: 51,
//   fullName: function () {
//     return "My name is " + person.name + " " + person.lname;
//   },
//   addres: {
//     country: "Canada",
//     city: "Charlemagne",
//     street: "My street",
//     number: 20,
//   },
// };

// console.log(person.fullName());

// Example 2 (with the word THIS - predefiniran zbor)
let person = {
  name: "Celine",
  lname: "Dion",
  age: 51,
  fullName: function () {
    return "My name is " + this.name + " " + this.lname;
  },
  addres: {
    country: "Canada",
    city: "Charlemagne",
    street: "My street",
    number: 20,
  },
};

console.log(person.fullName());

/* Adding value to the object 
Example: */

person.nationality = "Canadian";
person.email = "dionmartina@yahoo.com";

// console.log(person);

/* Delete a specific property 
Example : */

delete person.age;
console.log(person);
