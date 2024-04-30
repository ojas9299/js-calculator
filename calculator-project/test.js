let display = document.querySelector("#display");
let btn = document.querySelectorAll(".add");

var operator;
var operand = "";
let result = "";

let original = display.innerText;

function output() {
  result = display.innerText;
  operation = eval(result);
  display.innerText = operation;
}

/*----------operators events---------- */

btn[0].addEventListener("click", () => {
  display.innerText = display.innerText + "+";
});

btn[1].addEventListener("click", () => {
  display.innerText = display.innerText + "-";
});

btn[2].addEventListener("click", () => {
  display.innerText = display.innerText + "*";
});

btn[3].addEventListener("click", () => {
  display.innerText = display.innerText + "%";
});

/*----------operators events---------- */

/*----------operand events---------- */

btn[4].addEventListener("click", () => {
  display.innerText = display.innerText + "7";
});

btn[5].addEventListener("click", () => {
  display.innerText = display.innerText + "8";
});

btn[6].addEventListener("click", () => {
  display.innerText = display.innerText + "9";
});

btn[7].addEventListener("click", () => {
  display.innerText = display.innerText + "4";
});

btn[8].addEventListener("click", () => {
  display.innerText = display.innerText + "5";
});

btn[9].addEventListener("click", () => {
  display.innerText = display.innerText + "6";
});

btn[10].addEventListener("click", () => {
  display.innerText = display.innerText + "1";
});

btn[11].addEventListener("click", () => {
  display.innerText = display.innerText + "2";
});

btn[12].addEventListener("click", () => {
  display.innerText = display.innerText + "3";
});

btn[13].addEventListener("click", () => {
  display.innerText = display.innerText + "0";
});

btn[14].addEventListener("click", () => {
  display.innerText = display.innerText + ".";
});

btn[15].addEventListener("click", () => {
  display.innerText = original;
});

btn[16].addEventListener("click", () => {
  output();
});

/*----------operand events---------- */
