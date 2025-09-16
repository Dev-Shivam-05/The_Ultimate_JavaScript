// Check Armstrong number (e.g., 153).

let num = 371, temp = num, i = 1,armstrong_number = 0,last_digit;

do {
    last_digit = temp % 10;
    armstrong_number += (last_digit*last_digit*last_digit);
    temp = parseInt(temp / 10);
} while (temp != 0);

if (armstrong_number === num) {
    console.log(`Yes Number ${num} Is An ArmStrong Number.`);
} else {
    console.log(`No Number ${num} Is Not An ArmStrong Number.`);
}