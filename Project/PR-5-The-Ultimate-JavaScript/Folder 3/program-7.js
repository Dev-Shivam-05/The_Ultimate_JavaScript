// Q7. Write a program to remove elements from an array using splice().

let array = [1,12,31,4,50,61,7,8,9];

console.log(`Current Array is : ${array}`);

let removed_element = array.splice(3);

console.log(`After Removing [${removed_element}] From The array It Looks Like :`);
console.log(array);