// 5. Write a program to implement Bubble Sort.
const BubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] + array[j + 1];
        array[j + 1] = array[j] - array[j + 1];
        array[j] = array[j] - array[j + 1];
      }
    }
  }
  console.log(`The Sorted Array Is:`);
  console.log(array);
};

let array = [36, 54, 51, 5, 8, 46, 54, 6, 77];
console.log(`Given Array Is:`);
console.log(array);
BubbleSort(array);