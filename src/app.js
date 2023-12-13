/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumber = Math.floor(Math.random() * numbers.length);

  return numbers[randomNumber];
};
/**
 *Esta funcion retorna una figura aleatoria
 * @returns {string}
 */
let generateSuit = () => {
  let suitType = ["♠", "♣", "♥", "♦"];
  let randomSuit = Math.floor(Math.random() * suitType.length);

  if (randomSuit <= 1) {
    document.querySelector(".figure-top").style.color = "black";
    document.querySelector(".figure-bottom").style.color = "black";
  } else {
    document.querySelector(".figure-top").style.color = "red";
    document.querySelector(".figure-bottom").style.color = "red";
  }

  return suitType[randomSuit];
};

window.onload = function() {
  document.querySelector("#number").innerHTML = generateNumber();
  let suit = generateSuit();
  document.querySelector(".figure-top").innerHTML = suit;
  document.querySelector(".figure-bottom").innerHTML = suit;
};
