/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  window.genCard = function() {
    let symbols = ["♥", "♠", "♣", "♦"];
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

    function randomCard() {
      let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

      document.querySelector(".symbol-top").innerHTML = randomSymbol;
      document.querySelector(".card-number").innerHTML = randomNumber;
      document.querySelector(".symbol-bottom").innerHTML = randomSymbol;

      if (randomSymbol == "♥" || randomSymbol == "♦") {
        document.querySelector(".symbol-top").style.color = "red";
        document.querySelector(".symbol-bottom").style.color = "red";
        document.querySelector(".card-number").style.color = "red";
      }
    }

    randomCard();
  };

  window.genCard();
};
