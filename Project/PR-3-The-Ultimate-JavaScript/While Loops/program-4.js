// Find sum of digits of a number.

let reverse_num = ``,
  num = 54321,
  temp = num;
while (temp !== 0) {
  let last_digit = temp % 10;

  reverse_num = reverse_num + last_digit;

  temp = parseInt(temp / 10);
}
console.log(`The Reverse Of The Number ${num} Is :- ${reverse_num}`);
