/**
 * Homework *  Select a semantic  tag from the HTML  content and create it with the DOM selectors . (index.html - )
 */

let h2 = document.getElementsByTagName("h2");
h2[2].innerHTML = "* My social networks :";
h2[3].innerHTML = "* Education :";
h2[4].innerHTML = "*Contact :";

let p = document.getElementsByClassName("style");
p[0].innerHTML = "SGGUGS Zdravko Cvetkovski Skopje - Gimnazium";
p[1].innerHTML =
  "Ss. Cyril and Methodius University- Marketing on Faculty of Ekonomics";

let info = {
  email: "dionmartina@yahoo.com",
  phone: "072-316-076",
};

p[2].innerHTML = "E-mail : " + info.email;
p[3].innerHTML = "Phone Number :" + info.phone;
