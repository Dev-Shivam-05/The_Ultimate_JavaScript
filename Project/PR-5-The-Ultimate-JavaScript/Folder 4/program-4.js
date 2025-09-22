// Q4. Write a program to check if all elements of an array satisfy a condition using every().
let array = [42,6,38,35,23,7];

let isTrue = array.every(isEven(array));

if (isTrue) {
    console.log(`All Elements Of the Elements Satisfy The Condition That All Elements are Even.`);
} else {
    console.log(`No All ELement Does Not Satisfy the condition that says that is all elements are even or not.`);
}

const isEven = (i) => {
    return i % 2 == 0;
}