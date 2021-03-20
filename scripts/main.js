const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const output = document.querySelector("#output");
const multiply = document.querySelector("#multiply");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const dot = document.querySelector("#dot");
const reset = document.querySelector("#reset");

zero.addEventListener("click", outputScreen);
one.addEventListener("click", outputScreen);
two.addEventListener("click", outputScreen);
three.addEventListener("click", outputScreen);
four.addEventListener("click", outputScreen);
five.addEventListener("click", outputScreen);
six.addEventListener("click", outputScreen);
seven.addEventListener("click", outputScreen);
eight.addEventListener("click", outputScreen);
nine.addEventListener("click", outputScreen);
dot.addEventListener("click", outputScreen);

multiply.addEventListener("click", multiplyNums);
add.addEventListener("click", addNums);
subtract.addEventListener("click", subtNums);
divide.addEventListener("click", divideNums);
equals.addEventListener("click", calcResult);

reset.addEventListener("click", resetCalc);

var firstNum;
var currOperator;
var secondNum;
var usingSecondNum = false;
function multiplyNums() {
  firstNum = parseFloat(output.textContent);
  usingSecondNum = true;
  currOperator = "*";
}

function addNums() {
  firstNum = parseFloat(output.textContent);
  usingSecondNum = true;
  currOperator = "+";
}

function subtNums() {
  firstNum = parseFloat(output.textContent);
  usingSecondNum = true;
  currOperator = "-";
}

function divideNums() {
  firstNum = parseFloat(output.textContent);
  usingSecondNum = true;
  currOperator = "/";
}

function calcResult() {
  if (firstNum === undefined) {
    output.textContent = 0;
    return;
  } else {
    var result;
    secondNum = parseFloat(output.textContent);
    if (currOperator === "*") {
      result = firstNum * secondNum;
    } else if (currOperator === "+") {
      result = firstNum + secondNum;
    } else if (currOperator === "-") {
      result = firstNum - secondNum;
    } else if (currOperator === "/") {
      result = firstNum / secondNum;
    }
    output.textContent = result;
    usingSecondNum = true;
    currOperator = "";
  }
}

function resetCalc() {
  firstNum;
  currOperator;
  secondNum;
  usingSecondNum;
  output.textContent = 0;
}

function outputScreen() {
  if (output.textContent === "0" || usingSecondNum === true) {
    console.log("Here");
    output.textContent = this.innerHTML;
    usingSecondNum = false;
  } else {
    output.textContent += this.innerHTML;
  }
}
