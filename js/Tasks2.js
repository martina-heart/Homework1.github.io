/**
 * 1. Write a simple program for converting the height from
 * american to european system.
 *
 * ex. 6 feet 1 inch returns 183 cm
 */

/**
 * 1 foot = 30.48 cm
 * 1 inch = 2.54cm
 */

/**
 * 2. Write a to-do list application, which renders a list of
 * inserted to-do items, and has an interface for deleting
 * and editing the todos.
 */

/**
 * 3. Write a modal plugin, that will show a modal window that will pop-up
 * after clicking on a certain image thumbnail
 * and will be able to list through
 * a certain list of images.
 */

/**
 * 4. Write a module, that will count down the days, hours, minutes and seconds
 * to a given date in the future.
 */

let countDownFromDate = new Date("Nov 15, 2020 12:50:20").toDateString();
let countDownDate = new Date("Nov 15, 2020 12:50:20").getTime();
let now = new Date().getTime();

// setInterval, setTimeout

// let int = setInterval(function () {
//   console.log("After 2 seconds!");
// }, 2000);

// setTimeout(function () {
//   clearInterval(int);
// }, 6000);

let x = setInterval(function () {
  let now = new Date().getTime();
  //get distance between current date to countdown date
  let distance = countDownDate - now;

  console.log(new Date().getHours());

  //get days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Homework: Make the counter with the help of the following methods:
  //   getSeconds();
  //   getMinutes();
  //   getHours();

  //output countdown from date
  document.getElementById("countdown-from").innerHTML = `${countDownFromDate}`;
  //output timer to HTML
  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  //stop countdown timer when date is reached
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Timer Expired";
  }
}, 1000);

/**
 * 5. Write a search aplication, that will filter items from a given list
 * according to item's belonging to a certain group. Also the app
 * will have a input field, that will filter the items
 * by the input string in the field.
 */
