let counter = 0;

let buttons = document.querySelectorAll("button");
let value = document.getElementById("number");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText == "Decrease") {
      counter--;
    } else if (button.innerText == "Reset") {
      counter = 0;
    } else if (button.innerText == "Increase") {
      counter++;
    }
    value.innerText = counter;
  });
});
