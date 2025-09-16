// Print all factors of a number.

let all_factors = ``, num = 11,i = 1;

while (i <= num / 2) {
    if (num % i === 0) {
        all_factors += `${i}, `;
    }
    i++;
}
all_factors += `${num}`
console.log(`All Factors Of Number ${num} Are :- ${all_factors}.`);
