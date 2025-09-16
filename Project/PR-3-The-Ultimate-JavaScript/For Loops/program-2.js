// Print even numbers from 1 to 20.

let str = ``;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    str += `${i}, `;
  }
}
console.log(str);