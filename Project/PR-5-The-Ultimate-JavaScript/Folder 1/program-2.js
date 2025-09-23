//  2. Write a program to find the minimum value in an array.

let array = [36,54,51,5,8,46,54,6,77];
let min_value = 0;

for (let i = 0; i < array.length; i++) {
    if (min_value > array[i]) {
        min_value = array[i];
    }
}
console.log(`Given Array Is :- `);
console.log(array);

console.log(`And The Minimum Value In The Array Is :- ${min_value}`);
