/* Write a for loop that will fill an array with the value of the iterating variable
 */

let km = [];

for (let i = 0; i < 10; i++) {
  km[i] = i;
}

console.log(km);

/* Write for in loop for an object nested in another object */

let family = {
  mother: "Stefani",
  father: "Lukas",
  kids: {
    son: "Gabriel",
    dauther: "Olivia",
  },
};

for (let x in family.kids) {
  console.log(x);
}

/* Write for in loop for the following object {a: 1, b: 2, c: 3} that will log the following:
"a is 1" "b is 2" "c is 3"
*/

let books = { a: 1, b: 2, c: 3 };
for (let w in books) {
  console.log(w);
}

/* Write a for loop that will fill an array with anonimous functions and than another loop
that will execute those functions. In the first loop use the iterating value inside the anonimous functions.
*/

let arr = [];
/*inserted the prepositional word VAR */

for (var i = 5; i < 8; i++) {
  arr[i] = function () {
    return i;
  };
}

for (let j = 5; j < 8; j++) {
  console.log(arr[j]());
}
