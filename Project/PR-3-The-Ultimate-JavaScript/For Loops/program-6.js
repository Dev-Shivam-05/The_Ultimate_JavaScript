// Find factorial of a number (e.g., 5!).

let factorial = 1,num = 5;

for (let i = num; i >= 1; i--) {
  factorial *= i;
}

console.log(`The Factorial Of ${num}! is = ${factorial}`);