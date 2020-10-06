// function add(a, b) {
//   // let c = 3 (vo funcijata samo e vidliva i nemoze da se koristi nadvor od nea odnosno da se povikuva ) //
//   // se posle zborot return sto kje vneseme nema da se izvrsi //
//   return a + b;
// }

// let c = add(2, 2); // --> 4

// console.log(c); // --> 4

/* Pure Function // Example ( input=output)

function add(a, b) {
  c = a + b;
}
 let c = add(2, 2);
console.log(c); 
/*


/* Declare a function which will have two parameters and after its 
  execution will return the concatenatenated string from the 
  given arguments. 
  Try to check if the arguments are really strings.
  If they are not return "Sorry, wrong parameters given !" */

// let glass = ("red", "white");

// if (typeof glass) {
//   console.log("Value glass" + " Is String" + ".");
//   return;
//   console.log("Sorry, wrong parameters given!");
// }

/* Try to find why the following function is impure, and after that
  convert the same function to pure function.
  */

// let a = "";
// let b = ["basement", "floor", "attic", "roof"];

// function buildHouse(house, houseParts) {
//   for (let part of houseParts) {
//     if (part === houseParts[houseParts.length - 1]) {
//       house += part;
//     } else {
//       house += part + "--";
//     }
//   }

//   return house;
// }

// let c = buildHouse(a, b);

// console.log("Dali e a promeneta: " + a);

// console.log(c);

// /* Try to find out and also analize what would be the output of the following code block
//  */

let a = ["one", "two", "three"];
// Carry function, partial execution
function oneTwoThree() {
  let a = [1, 2, 3];
  return function () {
    let a = ["eden", "dva"];
    return function () {
      return a;
    };
  };
}

console.log(a);

// // Why do we have two execution statements after the name of the function
// let countToThree = oneTwoThree(a)(b)(c);
// console.log(typeof countToThree);
// // What if we remove the array a inside the function
// console.log(countToThree); // console.log(countToThree) --> ???
// // Make the function oneTwoThree a pure function
