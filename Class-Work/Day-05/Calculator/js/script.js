const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (events) => {
    let val = events.target.innerText;
    if (val == "=") {
      display.value = eval(display.value);
    } else if (val == "C") {
      display.value = "";
    } else {
      display.value += val;
    }
  });
});
