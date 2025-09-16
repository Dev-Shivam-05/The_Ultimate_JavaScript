// Print first 10 even numbers.

let str = ``, i = 1;

do {
    if (i % 2 == 0) {
        str += `${i} `;
    }
    i++;
} while (i <= 20);
console.log(str);