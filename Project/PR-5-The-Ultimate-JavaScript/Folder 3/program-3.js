// Q3. Write a program to remove the first element from an array using shift().

let array = [1,12,31,4,50,61,7,8,9];

console.log(`Current Array is : ${array}`);

let poped_element = array.shift(); // popping the first element from the array
console.log(`After Popping the First element ${poped_element} from the array it looks like :`);
console.log(array);