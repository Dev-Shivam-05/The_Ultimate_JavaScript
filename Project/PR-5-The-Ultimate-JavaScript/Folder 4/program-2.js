// Q2. Write a program to find the index of an element in an array using indexOf().

let array = [1,34,5,3,4,9,2,7];
let element = 4;
let isPresent = array.indexOf(element);
if (isPresent >= 0) {
    console.log(`The element ${element} is Present In The Array At Index ${isPresent}.`);
} else {
    console.log(`The element ${element} is Not Present In The Array.`);
}