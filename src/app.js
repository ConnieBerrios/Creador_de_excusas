/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
  let random_who = Math.floor(Math.random() * who.length);
  let result = who[random_who];
  let what = [" my homework ", " the keys ", " the car "];
  let random_what = Math.floor(Math.random() * what.length);
  let result2 = what[random_what];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let random_when = Math.floor(Math.random() * when.length);
  let result3 = when[random_when];
  let action = [" ate ", " peed ", " crushed ", " broke "];
  let random_action = Math.floor(Math.random() * action.length);
  let result4 = action[random_action];

  this.document.getElementById("excuse").innerHTML =
    result + result4 + result2 + result3;
};
