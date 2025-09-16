// Find largest digit in a number.

let num = 401326, temp = num , last_digit = 0, largest_digit = 0;

while (temp != 0) {
  last_digit = parseInt(temp % 10);
  if (largest_digit < last_digit) {
    largest_digit = last_digit;
  }
  temp = parseInt(temp / 10);
}
console.log(`The Largest Digit From The Number ${num} Is : ${largest_digit}.`);
