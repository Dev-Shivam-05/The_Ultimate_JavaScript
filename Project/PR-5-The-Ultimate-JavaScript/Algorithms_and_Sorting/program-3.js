// 3. Write a program to perform Linear Search on an array.

const LinearSearch = (arr, targeted_value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targeted_value) {
      return arr[i];
    }
  }
  return -1;
};

let array = [36, 54, 51, 5, 8, 46, 54, 6, 77];
let target = 5;
let result = LinearSearch(array, target);
if (result >= 0) {
  console.log(
    `The Targeted Value ${target} Is Found At the Index ${result} In the Array.`
  );
} else {
  console.log(`The Targeted Value ${target} Is Not Found In the Array.`);
}
