// let num_1 = document.getElementById('num_1');
// let num_2 = document.getElementById('num_2');
// let operator = document.getElementById('operator');
// let result;

// const calculator = () => {
//     let number_1 = parseInt(num_1.value);
//     let number_2 = parseInt(num_2.value);

//     const sum = (number_1,number_2) => {
//         return number_1 + number_2;
//     }

//     const sub = (number_1,number_2) => {
//         return number_1 - number_2;
//     }

//     const product = (number_1,number_2) => {
//         return number_1 * number_2;
//     }

//     const Division = (number_1,number_2) => {
//         return number_1 / number_2;
//     }

//     let choice = parseInt(operator.value);

//     switch (choice) {
//         case 1:
//             result.value = sum(number_1,number_2);
//             break;

//         case 2:
//             result.value = sub(number_1,number_2);
//             break;

//         case 3:
//             result.value = product(number_1,number_2);
//             break;

//         case 4:
//             result.value = division(number_1,number_2);
//             break;

//         default:
//             result.value = "Wrong Choice.";
//             break;
//     }

//     document.getElementById('result').innerHTML += `${result}`;
// }

// let num_1 = parseInt(prompt("Enter A Number"));
// let num_2 = parseInt(prompt("Enter Another Number"));
// // alert(
//   "1. For Addtion - 2 for Subtraction - 3. For Multiplication - 4. For Division."
// );
// let operator = parseInt(prompt("Enter Operation To Perform"));

let num_1 = document.getElementById("nums_1");
let num_2 = document.getElementById("nums_2");
let operator = document.getElementById("operator");
// let num_1 = 10,num_2 = 20,operator = 1;
let result;

const calculator = () => {
  // let number_1 = parseInt(num_1.value);
  // let number_2 = parseInt(num_2.value);

  const sum = (num_1, num_2) => {
    return num_1 + num_2;
  };

  const sub = (num_1, num_2) => {
    return num_1 - num_2;
  };

  const product = (num_1, num_2) => {
    return num_1 * num_2;
  };

  const Division = (num_1, num_2) => {
    return num_1 / num_2;
  };

  // let choice = parseInt(operator.value);

  switch (operator) {
    case 1:
      result = sum(num_1, num_2);
      break;

    case 2:
      result = sub(num_1, num_2);
      break;

    case 3:
      result = product(num_1, num_2);
      break;

    case 4:
      result = division(num_1, num_2);
      break;

    default:
      result = "Wrong Choice.";
      break;
  }
};
calculator();
console.log(result);
