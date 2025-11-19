/* =========== Edit Product =============*/
const productForm = document.getElementById("productForm");
const inputs = document.querySelectorAll("#productForm input");
const textarea = document.querySelectorAll("#productDescription");
const selectCategory = document.querySelectorAll("#productCategory");

let rawEditData = localStorage.getItem("editData");
let editProducts = [];

// Check if data exists AND is not the string "undefined"
if (rawEditData && rawEditData !== "undefined") {
  editProducts = JSON.parse(rawEditData);
}
console.log(editProducts);
console.log(typeof editProducts);

function editProgram() {
  let editInputs = document.querySelectorAll(".input");
  let {
    productName,
    productCategory,
    productImage,
    productPrice,
    productDescription,
  } = editProducts;

  let array_inputs_value = [productName, productImage, productPrice];
  let ProductPrice = document.getElementById("productPrice");
  let arr = Array.from(editInputs);
  console.log(arr);
  ProductPrice.innerHTML = `${productPrice}`;
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = array_inputs_value[i];
  }

  let textarea = document.getElementById("productDescription");
  console.log(textarea);

  textarea.value = `${productDescription}`;
}

editProgram();
/*
let ProductName = document.getElementById("productName");
let ProductPrice = document.getElementById("productPrice");
let ProductImage = document.getElementById("productImage");
let selectProductCategory = document.getElementById("productCategory");
let ProductDescription = document.getElementById("productPrice");

let {
  productName,
  productCategory,
  productImage,
  productPrice,
  productDescription,
} = editProducts;

ProductName.value = productName;
ProductPrice.value = productPrice;
selectProductCategory.value = productCategory;
ProductDescription.value = productDescription;
ProductImage.value = productImage;

*/
