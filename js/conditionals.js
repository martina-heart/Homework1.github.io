/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

// declare variablees
let girl = 4;
let girl1 = 2;
let girl2 = 1;

if (girl && girl1 && girl2) {
  console.log(girl + girl1 + girl2);
} else {
  console.log("Sorry, you are missing at least one value");
}

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/

// declare variablees
let boy = 25;
let boy1 = 25;
let boy2 = 20;

// else if is true
if (boy2 && boy < boy1) {
  console.log(boy2 * boy);
} else if (boy === boy1) {
  console.log(boy + boy1);
} else {
  ("Sorry you don't have 50 boys ");
}

// if is true
if (boy2 && (boy || boy1)) {
  console.log(boy2 * boy);
} else if (boy === boy1) {
  console.log(boy + boy1);
} else {
  ("Sorry you don't have 50 boys ");
}

// else is true (// )

if (boy2 && boy < boy1) {
  console.log(boy2 * boy);
} else if (boy1 <= boy2) {
  console.log("No boys");
} else {
  ("Try again");
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

// declare variablees

let day1 = "Monday";
let day2 = "Tuesday";
let day3 = "Wednesday";

switch (day3) {
  case "Monday":
    console.log("Today is Monday");

    break;
  case "Tuesday":
    console.log("Today is Tuesday");

  default:
    console.log("Today is Wednesday");
    break;
}
