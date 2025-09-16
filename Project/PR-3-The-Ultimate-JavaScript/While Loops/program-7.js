// Find smallest digit in a number.

let num = 401326, temp = num , last_digit = 0, smallest_digit = 9;

while (temp != 0) {
  last_digit = parseInt(temp % 10);
  if (smallest_digit > last_digit) {
    smallest_digit = last_digit;
  }
  temp = parseInt(temp / 10);
}
console.log(`The Smallest Digit From The Number ${num} Is : ${smallest_digit}.`);
