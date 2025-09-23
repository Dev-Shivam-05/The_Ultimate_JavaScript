// 4. Write a program to perform Binary Search on an array.

const BinarySearch = (arr, targeted_value) => {
  let start = 0;
  let end = arr.length() - 1;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    if (arr[mid] == targeted_value) {
        return mid;
    } else if (arr[mid] < targeted_value) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
  }
  return -1;
};

let array = [36, 54, 51, 5, 8, 46, 54, 6, 77];
let target = 5;
let result = BinarySearch(array, target);
if (result >= 0) {
  console.log(
    `The Targeted Value ${target} Is Found At the Index ${result} In the Array.`
  );
} else {
  console.log(`The Targeted Value ${target} Is Not Found In the Array.`);
}