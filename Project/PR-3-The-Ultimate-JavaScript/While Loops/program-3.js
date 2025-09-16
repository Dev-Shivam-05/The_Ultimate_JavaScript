// Find sum of digits of a number.
let sum = 0,
  num = 12673,
  temp = num,
  last_digit;
while (temp !== 0) {
  let last_digit = temp % 10;

  sum = (sum + last_digit);

  temp = parseInt(temp / 10);
}
console.log(`The Sum of All Digit Of ${num} Is :- ${sum}`);