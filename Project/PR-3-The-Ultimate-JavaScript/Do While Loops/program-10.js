// Print pattern (square of * of size 5).

let str = ``, i = 1, j = 1;
do {
    str = ``;
    j = 1;
    do {
        str += `* `;
        j++;
    } while (j <= 5); 
    console.log(str);
    i++;
} while (i <= 5);
