/* Write an object that consists from these key-value pairs:
k: name v: your name
k: age v: your age
k: address v: your address (as Object) --> k: street v: your street name k: number v: your street number k: city v: your city 
*/

let info = {
  name: "Martina",
  age: "25",
  adress: { street: "Kosturski Heroi", number: "31", city: "Skopje" },
};

/* Write few arrays that consists of these elements:
1. list of numbers from 1 to 10
2. list of names
3. mixed content
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["Monika", "Lena", "Sofija", "Kristina", "Jovana"];
let mixed = ["Monika 1", "Lena 2", "Sofija 3", "Kristina 4", "Jovana 5"];

/* Assign the created object and array to new variables. 
Then try to change some values inside this newly created complex data structures with this sintax:

    For the object:
    NewObject.property = some value; (NewObject is the newly created object after the assignment expression)

    For the array:
    NewArray[index] = some value; (NewArray is the newly created array after the assignment expression)

*/

/* Expected results */
//console.log(OriginalObject) --> ?
//console.log(OriginalArrray) --> ?
//console.log(NewObject) --> ?
//console.log(NewArray) --> ?

// Reassign reference type example

/*
let obj = { first: 'reference' };
let obj2 = obj;

obj = { second: 'ref2' }

console.log(obj2) --> ?
*/
