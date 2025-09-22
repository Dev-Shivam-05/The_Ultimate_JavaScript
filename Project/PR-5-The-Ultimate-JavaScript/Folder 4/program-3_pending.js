// Q3. Write a program to iterate over an array and display each element with its index using forEach().

let array = [1,34,5,3,4,9,2,7];
let element = 0,i=0;
let data_of_array = array.forEach(value , index => {
    console.log(`${value} ${index}`);
});