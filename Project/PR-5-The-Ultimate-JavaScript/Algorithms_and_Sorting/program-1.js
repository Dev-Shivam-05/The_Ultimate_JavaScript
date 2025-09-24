// 1. Write a program to find the maximum value in an array.
let array = [36,54,51,5,8,46,54,6,77];
let max_value = 0;

for (let i = 0; i < array.length; i++) {
    if (max_value < array[i]) {
        max_value = array[i];
    }
}
console.log(`Given Array Is :- `);
console.log(array);

console.log(`And The Maximum Value In The Array Is :- ${max_value}`);
