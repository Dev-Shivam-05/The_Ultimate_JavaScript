// Q8. Write a program to copy elements within the same array using 
let array = [1,12,31,4,50,61,7,8,9];

console.log(`Current Array is : ${array}`);

array += array.copyWithin();

console.log(`The New Copied Array Is : ${array}`);
