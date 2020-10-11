/**
 * 1. Поимот AJAX означува повик до одреден API, со цел да се добијат одредени податоци, кои потоа ќе бидат вклучени во приказот на web страницата.
 * 2. Во моментот постојат два начини да се направи AJAX повик преку browser околината, и тоа веќе застарениот XHR API интерфејс,
 *  како и модерниот начин на AJAX повици преку fetch API.
 */

/**
 * Basic call using XHR (legacy code)
 */

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();
}

loadDoc();

/**
 * Ajax with fetch API
 */

function loadDocWithFetch() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

let res = loadDocWithFetch();

res.then((res) => res.json()).then((data) => console.log(data));
