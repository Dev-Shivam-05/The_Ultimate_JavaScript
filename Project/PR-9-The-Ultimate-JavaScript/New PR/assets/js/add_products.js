// import header from "../utilities/nav";

const productForm = document.getElementById("productForm");
const inputs = document.querySelectorAll("#productForm input");
const textarea = document.querySelectorAll("#productDescription");
let products = JSON.parse(localStorage.getItem("products")) || [];
let product_obj = {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let { name, value } = e.target;
    product_obj = { ...product_obj, [name]: value };
  });
});
textarea.addEventListener("input", (e) => {
  let { name, value } = e.target;
  product_obj = { ...product_obj, [name]: value };
});

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  products.push(product_obj);
  localStorage.setItem("products", JSON.stringify(products));
  inputs[0].focus();
  // e.reset();
  productForm.reset();
});
