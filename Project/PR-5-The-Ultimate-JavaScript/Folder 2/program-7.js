// Q7. Write a program to join array elements into a single string with a custom separator.

let array = ['S' , 'H' , 'I' , 'V' , 'A' , 'M'];
console.log(`The Given Array Is : ${array}`);
console.log("");
array = array.join('-'); // Separated each and every element of the array with '-'
let str = array.toString(); // Converted Array To String.
console.log(`The array Converted into string is :- ${str}`);
