// Q1. Write a program to check if an element exists in an array using includes().
let array = [1,34,5,3,4,9,2,7];
let element = 40;
if (array.includes(element)) {
    console.log(`The element ${element} is Present In The Array.`);
} else {
    console.log(`The element ${element} is Not Present In The Array.`);
}