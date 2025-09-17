let num = parseInt(prompt("Enter a Number To Find It's Factorial : "));
// let num = 5;

const factorial = (number) => {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
};

document.writeln(`The Factorial Of ${num} Is : ${factorial(num)}`);
