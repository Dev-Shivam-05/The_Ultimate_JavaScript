// Print a right-angled triangle pattern with *.

let str = ``;

for (let i = 1; i <= 5; i++) {
    str = ``;
    for (let j = 1; j <= i; j++) {
        str += `* `;
    }
    console.log(str);
}