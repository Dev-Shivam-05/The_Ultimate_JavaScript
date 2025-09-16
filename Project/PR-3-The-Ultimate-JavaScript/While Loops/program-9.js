// Count digits in a number.

let num = 12345, temp = num , count = 0;

while (temp != 0) {
    count++;
  temp = parseInt(temp / 10);
}
console.log(`Total Number Of Digits In The Number ${num} IS : ${count} Digits.`);