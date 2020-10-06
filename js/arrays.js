// let a = [1, 2, 3];

// let b = {};

// console.log(a[0]); // -->  1

// console.log(a.length); // --> 3

// for (let i = 0; i < a.length; i++) {}

// a.push(4); --> (dodava clen na krajot od nizata )

// a.pop(0); --> (go odzima - brise posledniot clen od nizata)

// a.unshift(1); --> (dodava clen na pocetokot na nizata )

// a.shift(); --> (go brise prviot clen od nizata )

// a.splice();
//(prviot parametar e Start , vtoriot deletecount, tretiot se items koi gi vnesuvame)
// let arr = [1, 2, 3, 4, 5, 6];
// let arrSplice = [];
// arrSplice=arr.splice(1,2);
//--- posle eden gi brise 2-ta broja koi sleduvaat naredni
// arrSplice = arr.splice(1, 0, "posle1");
//--- posle 1 go dodava "posle1"
// arrSplice = arr.splice(1, 2, "posle1");
//--- posle 1 izbrisi go dvata naredni broja koi sleduvaat i dodadi go "posle1"
// console.log(arr);
// console.log(arrSplice);
// a.slice();

// let arrSlice = [];

// arrSlice = arr.slice(1(start parametar), 3(kraen parametar));
// console.log(arr);
// console.log(arrSlice);

/*  <--- Callback function --->
a.forEach( function ) {
    }); 
 */

// console.log(a);

// Calls with callback function as a parametar

// var cb = function (el, i, arr) {
//   console.log("El e: " + el);
//   console.log("I e: " + i);
//   console.log("Array e: " + arr);
// };
// a.forEach(cb);

// let person = {
//   name: "Viktor",
//   walk: function (f) {
//     f();
//   },
// };

// person.walk();

// a.forEach(function () {});

// // a.splice && a.slice()

//HOMEWORK

/* Create a menu-like structure inside the current project with the help of the forEach array method.
During the creation, callback function should check if any of the array element is empty, and if it is
should skip it. The menu array itself does not hold the "home" and "contact" items, which should appear at the
start and at the end position of the menu like structure, so they have to be added programmaticaly.
*/
// function pure() {
//   return arr.slice(0, 2);
// }

// function pure() {
//   return arr.splice();
// }

// let newArr = pure(arr);

// let menu = "";
// let arr = ["about", "services"];

// arr.unshift("home");
// arr.push("contact");
// menu = "<ul>";

// arr.forEach(myMenu);
// menu += "</ul>";

// function myMenu(list) {
//   menu += "<li>" + list + "</li>";
// }

// let nav = (document.getElementById("main-menu").innerHTML = menu);

// console.log(menu);
// console.log(arr);
