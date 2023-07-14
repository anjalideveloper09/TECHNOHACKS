const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (buttonValue) => {
  display.focus();
  if (buttonValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    output = "";
  } else if (buttonValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(buttonValue)) return;
    output += buttonValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});