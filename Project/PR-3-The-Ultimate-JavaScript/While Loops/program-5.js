// Check if a number is palindrome.

let reverse_num = ``,
  num = 121,
  temp = num;
while (temp !== 0) {
  let last_digit = temp % 10;

  reverse_num = reverse_num + last_digit;

  temp = parseInt(temp / 10);
}
if (reverse_num == num) {
    console.log(`The Number ${num} Is Palindrome.`);
} else {
    console.log(`The Number ${num} Is Not Palindrome.`);
}
