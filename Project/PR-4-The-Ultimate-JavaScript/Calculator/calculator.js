function sum() {
  let num_1 = parseInt(document.getElementById("num_1").value);
  let num_2 = parseInt(document.getElementById("num_2").value);
  document.getElementById("answer").value = num_1 + num_2;
}

function sub() {
  let num_1 = parseInt(document.getElementById("num_1").value);
  let num_2 = parseInt(document.getElementById("num_2").value);
  document.getElementById("answer").value = num_1 - num_2;
}

function product() {
  let num_1 = parseInt(document.getElementById("num_1").value);
  let num_2 = parseInt(document.getElementById("num_2").value);
  document.getElementById("answer").value = num_1 * num_2;
}

function division() {
  let num_1 = parseInt(document.getElementById("num_1").value);
  let num_2 = parseInt(document.getElementById("num_2").value);
  if (num_2 === 0) {
    document.getElementById("answer").value = "Error: Division by zero!";
  } else {
    document.getElementById("answer").value = num_1 / num_2;
  }
}