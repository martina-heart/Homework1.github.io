//Klasite sluzat za zadavanje nov tip koj ponataka kje mozeme da go manipulirame//
//Primer:

// let a = "zbor";

// console.log(typeof a); //String

// class Robot {}
// let robot1 = new Robot();
// console.log(typeof robot1); //Object

import Human from "./classes/Human.class";

const macedonian = new Human(20, "man");
const languages = ["macedonian", "albanian", "serbian"];

macedonian.setLanguage(languages);

console.log(macedonian.talk());

//The constructor is executed only once//
// class Square {
//   constructor(nameofvalue) {
//     this.strana1 = nameofvalue;
//     this.strana2 = this.strana1;
//   }

//   getStrana() {
//     return this.strana1;
//   }

//   get area() {
//     return this.strana1 * this.strana2;
//   }
//   set strana(vrednostNaStrana) {
//     this.strana1 = vrednostNaStrana;
//     this.strana2 = vrednostNaStrana;
//   }
// }

// let mySquare1 = new Square(5);
// mySquare1.strana = 6;
// console.log(mySquare1.area);
// console.log(mySquare1.getStrana());

/* Staticno kreiranje (STATIC) */

// class Square {
//   constructor(nameofvalue) {
//     this.strana1 = nameofvalue;
//     this.strana2 = this.strana1;
//   }

//   getStrana() {
//     return this.strana1;
//   }

//   get area() {
//     return this.strana1 * this.strana2;
//   }
//   set strana(vrednostNaStrana) {
//     this.strana1 = vrednostNaStrana;
//     this.strana2 = vrednostNaStrana;
//   }
//   static povNa2Kocki(a, b) {
//     return a.strana1 * a.strana2 + b.strana1 * b.strana2;
//   }
// }

// let mySquare1 = new Square(5);
// let mySquare2 = new Square(6);

// console.log(Square.povNa2Kocki(mySquare1, mySquare2));

// console.log(mySquare1.area);
// console.log(mySquare1.getStrana());
