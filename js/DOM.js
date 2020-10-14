/*-------DOM -Document Object Model ------ */

/*Методи за пристапување до HTML елементите се следниве:
   -getElementById, 
   -getElementsByTagName,
   -getElementsByClassName,
   -querySelectorAll,
   -querySelector,

-----За да се пристапи до DOM во JS се користи резервираниот збор DOCUMENT */

// let mainMenu = document.getElementById("main-menu");

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let span = document.getElementsByTagName("span");
// let  = document.querySelector("");
// let first = document.querySelectorById("firstID");

// h1.innerHTML = "Hello everyone, this is my first webside !";
// h2.innerHTML = "Future Front-End Developer";
// document.querySelector("h2.back").style.backgroundColor = "yellowgreen";

// console.log(h2);
// console.log(first);

/* Create menu like structure, very similar to the one from the array exercises,
but instead of using the concatenating strings, use the dom methods.
*/
// let mainMenu = document.getElementById("main-menu");
// let ul = document.createElement("ul");
// let a = ["Home", "About", "Contact"];

// ul.style.listStyle = "none";

// for (let el of a) {
//   let li = document.createElement("li");
//   let a = document.createElement("a");
//   a.innerHTML = el;

//   a.setAttribute("href", el + ".html");

//   li.appendChild(a);
//   ul.appendChild(li);
// }

// console.log(mainMenu);

/* HOMEWORK MENU */

// let mainMenu = document.getElementById("menu");

// let navItems = [
//   { href: "/Home.html", page: "Home" },
//   { href: "/About.html", page: "About" },
//   { href: "/Contact.html", page: "Contact" },
// ];

// let nav = document.createElement("nav");
// let ul = document.createElement("ul");
// nav.appendChild(ul);

// for (let el in navItems) {
//   let li = document.createElement("li");
//   let a = document.createElement("a");

//   a.href = navItems[el].href;
//   a.innerHTML = navItems[el].page;
//   li.appendChild(a);
//   ul.appendChild(li);
// }
// mainMenu.appendChild(nav);
