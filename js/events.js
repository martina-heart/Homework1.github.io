// let mainMenu = document.getElementById("main-menu");

//Prv nacin
// mainMenu.onclick = function (e) {
//   console.log(e.target); // Koga kje klikneme ni go prikazuva slucuvanjeto na toj element
//console.log(e.type);
// };

//Vtor nacin da se praktikuva
// mainMenu.addEventListener("click", function (e) {
//   console.log(e.type);
// });

//da se stopira Difoldnata funkcija so (preventDefault)
// let a = document.querySelector("a");

// a.addEventListener("click", function (e) {
//   e.preventDefault();
// });

//  CurrentTarget

let h1 = document.querySelector("h1");
let header = document.querySelector("header");
let a = document.querySelector("a");
a.addEventListener("click", function (e) {
  e.preventDefault();
});

// h1.onclick = function (e) {
//   console.log(e.currentTarget); // Koga kje klikneme ni go prikazuva slucuvanjeto na elementot na koj sto e zakacen
// };

header.onclick = function (e) {
  console.log(e.currentTarget);
};

//StopPropagation

h1.onclick = function (e) {
  e.stopPropagation();
  console.log(e.currentTarget);
};
