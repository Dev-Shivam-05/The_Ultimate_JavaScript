// Find product of digits of a number.

let product = 1,
  num = 123,
  temp = num,
  last_digit;
while (temp !== 0) {
  let last_digit = temp % 10;

  product = (product * last_digit);

  temp = parseInt(temp / 10);
}
console.log(`The Product of All Digit Of ${num} Is :- ${product}`);