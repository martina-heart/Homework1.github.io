/**
 * 1. Write JS script that will log the following object:
 *  let ob = {
 *     models: ['Ford', ‘Skoda'],
 *     colors: ['Red', 'Grey'],
 *  };
 * from the array given.
 */

// let cars = [
//   {
//     model: "Ford",
//     color: "Red",
//   },
//   {
//     model: "Skoda",
//     color: "Grey",
//   },
//   {
//     model: "Ford",
//     color: "Grey",
//   },
// ];

// let ob = { models: [], colors: [] };

// for (let car of cars) {
//   if (ob.models.indexOf(car.model) == -1) {
//     ob.models.push(car.model);
//   }
//   if (ob.colors.indexOf(car.color) == -1) {
//     ob.colors.push(car.color);
//   }
// }

// console.log(ob);
/**
 * 2. Write JS program that will log the following array:
 * let a = ['Apple', 'Bannana', 'Pear', 'Orange']
 * from the object given.
 */

// let fruits = {
//   subtropical: {
//     area: "Far from the Equator",
//     list: ["Apple", "Pear"],
//   },
//   tropical: {
//     area: "Near the Equator",
//     list: ["Banana", "Orange"],
//   },
// };

// let a = [];

// for (let group in fruits) {
//   a.push(fruits[group].list);
// }
// console.log(a.flat());

/**
 * 3. Write JS program that will switch positions of the keys and values
 * inside a certain object and log the new object.
 *
 * ex. {a: 1, b: 2, c: 3} returns {1: "a", 2: "b", 3: "c"}
 */

// let ob = { a: 1, b: 2, c: 3 };
// let ob2 = {};

// Object.entries(ob).forEach((el) => {
//   ob2[el(1)] = el[0];
// });

// console.log(ob2);

/**
 * 4. Write JS program that will first flatten the given array, and then
 * it will remove the duplicates inside the new array,
 * and in the end it will sort the array.
 *              HOMEWORK
 * hint ( sort)
 */

// let numbers = [
//   [7, 2, 4],
//   [4, 3],
//   [5, 1, 6],
//   [9, 3, 7, 2, 4],
// ];

// let newArr = [];

// numbers.flat().forEach((el) => {
//   if (newArr.indexOf(el) == -1) {
//     newArr.push(el);
//   }
// });
// newArr.sort();
// console.log(newArr);

/**
 * 5. Write JS program that will find the longest word from a given string.
 *
 * ex. "I am student in the CodeAcademy school." returns "CodeAcademy"
 */

// let str = "I am student in the CodeAcademy school.";

// let a = str.split(" ");
// let word = "";

// a.forEach((el) => {
//   if (el.length > word.length) {
//     word = el;
//   }
// });

// console.log(word);

/**
 * 6. Write JS program that will compare two arrays and will return array
 * that hold only the items found in both of the arrays.
 *             HOMEWORK
 *
 * ex. ["apple", "watermelon", "lemon", "pear"], ["pear", "orange", "grape", "lemon"] returns ["pear", "lemon"]
 *
 *  hint (filter)- nov metod samo za nizi Arreys
 */

// let a = ["apple", "watermelon", "lemon", "pear"];
// let b = ["pear", "orange", "grape", "lemon"];

// let c = a.filter((el) => {
//   return b.indexOf(el) != -1; //es6 b.includes(el)
// });

// console.log(c);

/**
 * 7. Write JS program that will render a button inside a HTML document
 * and when clicked it will change the background-color of the
 * top-level tag rendered in that document(ex. the body tag).
 */

// let button;
// let topLevelTag;
// let color = "red";

// button = document.getElementById("btn");
// topLevelTag = document.getElementsByTagName("body")[0];

//console.log(button);
//console.log(topLevelTag);

// button.addEventListener("click", function (e, el) {
//   return onButtonClick(e, button);
// });

// function onButtonClick(e, el) {
//   e.preventDefault();

//   el.style.backgroundColor = "blue";
// }

/**
 * 8. Write JS program that will generate a random quote from the given
 * list of quotes, and it will display into the browsera, and alongside
 * it will also list the name of the man behind.
 *                          HOMEWORK
 */

// const quotes = [
//   {
//     quote:
//       "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
//     author: " Life",
//   },
//   {
//     quote:
//       "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
//     author: "John Kenneth Galbraith",
//   },
//   {
//     quote: "God save me from my friends. I can protect myself from my enemies.",
//     author: "Claude Louis Hector de Villars ",
//   },
//   {
//     quote: "The price of anything is the amount of life you exchange for it.",
//     author: "David Thoreau",
//   },
//   {
//     quote:
//       "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
//     author: "Charles Lindbergh",
//   },
//   {
//     quote:
//       "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
//     author: " Tyne Daly",
//   },
// ];

// function randomThings(quotes) {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// console.log(randomThings(quotes)); // quote: "The price of anything is the amount of life you exchange for it.", author: "David Thoreau",

/**
 * 9. Write JS program that will find words into a string and
 * will capitalize them if they are not, and leave them as
 * they are if they are capitalized.
 *
 * ex. "Head, shoulders, nees and Toes" returns "Head, Shoulders, Nees And Toes"
 *                          HOMEWORK
 *
 * hint: use method toUpperString()
 */

// var a = "Head, shoulders, nees and Toes";
// var upper = a.split(" ");

// for (let i = 0; i < upper.length; i++) {
//   upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
// }

// console.log(upper); //returns "Head, Shoulders, Nees And Toes"

/**
 * 10. Write JS program that will filter out only the words from an array
 * that have the given letter (as a second argument) in them, and
 * if there is no such word it will return "Sorry, no word found";
 *
 * ex. filter(["Wood", "Iron", "Towel", "Bridge"], "w") returns ["Wood", "Towel"]
 *
 *                          HOMEWORK
 *
 * hint : use indexOf() and filter metod
 *
 * finction findLetter ( arr, letter ) {
 * arr.forEach(() => {
 * el.indexOf (letter) != -1
 * })
 *  return newArrey
 * let arr = [12,123,412];
 * let worl ="traect";
 *
 * console.log(findLetter(arr, word)); da ja resam / dovrsham !!!!!!
 */

let arr = ["Wood", "Iron", "Towel", "Bridge"];
let word = "w";
newArrey = [];
function findLetter(arr, word) {
  newArrey.forEach((element) => {
    element.indexOf(word) != -1;
  });
  return newArrey;
}

console.log(findLetter(arr, word));
