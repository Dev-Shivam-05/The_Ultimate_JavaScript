const form = document.querySelector("#products");
const inputs = form.querySelectorAll("input");
let products = JSON.parse(localStorage.getItem("products")) || [];
let product_details = {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let { name, value } = e.target;
    product_details = { ...product_details, [name]: value };
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  if (!allFilled) {
    alert("Please fill out all fields!");
    return;
  }

  Date.now();
  products.push({ ...product_details, product_Id: Date.now() });
  localStorage.setItem("products", JSON.stringify(products));
  form.reset();
  product_details = {};
  inputs[0].focus();
});
