const productForm = document.getElementById("productForm");
const inputs = document.querySelectorAll("#productForm input");
const textarea = document.querySelectorAll("#productDescription");
const selectCategory = document.querySelectorAll("#productCategory");
let products = JSON.parse(localStorage.getItem("product")) || [];
let cartBadge = document.getElementById("cart-badge");
let product_obj = {};
let handleCartProduct = document.getElementById("handleCartProducts");
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let { name, value } = e.target;
    product_obj = { ...product_obj, [name]: value };
  });
});

textarea.forEach((textArea) => {
  textArea.addEventListener("input", (e) => {
    let { name, value } = e.target;
    product_obj = { ...product_obj, [name]: value };
  });
});

selectCategory.forEach((select) => {
  select.addEventListener("change", (e) => {
    let { name, value } = e.target;
    let ID = productIdGenerator(value);
    product_obj = { ...product_obj, [name]: value, productID: ID };
  });
});

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  products.push(product_obj);

  localStorage.setItem("products", JSON.stringify(products));
  console.log(products, product_obj);

  productForm.reset();
  inputs[0].focus();

  product_obj = {};
  displayProductInHome();
  displayProduct();
});

function productIdGenerator(value) {
  return `${value.slice(0, 3).toUpperCase()}${
    Math.floor(Math.random() * 50) + 1
  }`;
}

/* =========== View Product In Home =============*/
const displayProductInHome = () => {
  const viewProductAtHome = document.getElementById("viewProductHome");
  viewProductAtHome.innerText = "";
  products.forEach((product) => {
    let { productName, productPrice, productImage, productID } = product;

    const card = document.createElement("div");
    card.classList.add("col-lg-3");
    card.classList.add("col-md-6");

    card.innerHTML = `
      <div class="product-card fade-in">
        <div id="viewProductHome" class="product-img-container">
           <img
          src="${productImage}"
          alt="${productName}"
          class="product-img"
        />
        <span class="product-badge">New</span>
      </div>
      <div class="product-body">
        <h5 class="product-title">${productName}</h5>
        <h4 class="product-price">$ ${productPrice}</h4>
        <button type="button" onclick="handleCartProducts(this)" class="add-to-cart-btn" data-product-id="${productID}">
          <i class="bi bi-cart-plus me-2"></i>Add to Cart
        </button>
      </div>
        </div>
      </div>
    `;
    viewProductAtHome.appendChild(card);
  });
};
displayProductInHome();
const addProductToCart = (id) => {
  let toCart = products.find((product) => {
    return product.productID == id;
  });
  toCart = { ...toCart, productQty: 1 };

  cartProducts = [...cartProducts, toCart];
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // cartBadge.innerText = `${cartProducts.length}`;
  console.log(`cartProducts + ${cartProducts}`);
  console.log(`Qty : ${cartProducts.productQty}`);
  console.log(`CartProduct : ${cartProducts} ToCart : ${toCart}`);
};

const handleCartProducts = (button) => {
  let id = button.getAttribute("data-product-id");

  let isAvailable = false;
  cartProducts.forEach((cartProduct) => {
    console.log(cartProduct.productID);
    if (cartProduct.productID == id) {
      isAvailable = true;
      cartProduct.productQty++;
      return;
    }
  });

  if (!isAvailable) {
    addProductToCart(id);
  }
  console.log(`CartProduct :${cartProducts[0]}`);
};

/* =========== View Product =============*/
const displayProduct = () => {
  const viewProductTBLBody = document.getElementById("viewProductTBLBody");
  viewProductTBLBody.innerText = "";
  products.forEach((product) => {
    let {
      productName,
      productPrice,
      productImage,
      productCategory,
      productID,
    } = product;

    // Generate random stock (1–50)
    let randomStock = Math.floor(Math.random() * 50) + 1;

    // Create table row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${productImage}" alt="Product" class="product-thumb" />
      </td>
      <td class="fw-semibold">${productName}</td>
      <td>${productCategory}</td>
      <td class="text-primary fw-bold">$${productPrice}</td>
      <td>${randomStock}</td>
      <td>
        <button type="button" onclick="editProduct(this)" data-product-id="${productID}" class="btn btn-success">Edit</button>
        <button type="button" onclick="deleteProduct(this)" data-product-id="${productID}" class="btn btn-danger">Delete</button>
      </td>
    `;
    viewProductTBLBody.appendChild(row);
  });
};

const deleteProduct = (element) => {
  let id = element.getAttribute("data-product-id");
  products = products.filter((p) => p.productID !== id);
  localStorage.setItem("products", JSON.stringify(products));
  displayProduct();
  displayProductInHome();
};

let rawEditData = localStorage.getItem("editData");
let editProducts = {};

// Check if data exists AND is not the string "undefined"
if (rawEditData && rawEditData !== "undefined") {
  editProducts = JSON.parse(rawEditData);
}
window.editProduct = (element) => {
  console.log(element);

  let id = element.getAttribute("data-product-id");
  const data = products.find((p) => p.productID == id);
  localStorage.setItem("editData", JSON.stringify(data));
  console.log(editProducts);
  window.location.href = "../pages/edit.html";
};
displayProduct();
displayProductInHome();
/* =========== Handling Cart =============*/

const cartDropdown = document.getElementById("cartDropdown1");

const handleCartData = () => {
  cartDropdown.innerHTML = "";

  cartProducts.forEach((cartProduct) => {
    let { productName, productPrice, productImage, productQty, productID } =
      cartProduct;

    let cart_item = document.createElement("div");
    cart_item.classList.add("cart-item");

    cart_item.innerHTML = `
    <img
      src="${productImage}"
      alt="${productName}"
      class="cart-item-img"
    />
    <div class="cart-item-details">
      <h4 class="cart-item-name">${productName}</h3>
      <h5 class="cart-item-price">$ ${productPrice}</h5>
      <label class="form-label">Quantity</label>
      <input
        type="number"
        value="${productQty}"
        class="form-control"
      />
    </div>
    `;

    cartDropdown.appendChild(cart_item);
  });
};
/*
document.readyState((product) => {
  let {
    productName,
    productCategory,
    productImage,
    productPrice,
    productDescription,
  } = product;

  if (inputs.length >= 3) {
    inputs[0].value = editObj.productName; // Set Name
    inputs[1].value = editObj.productImage; // Set Image URL
    inputs[2].value = editObj.productPrice; // Set Price
  }

  // B. Fill Textarea
  textarea.forEach((txt) => {
    txt.value = editObj.productDescription; // Use .value, not .innerText
  });

  // C. Fill Select Category
  selectCategory.forEach((sel) => {
    sel.value = editObj.productCategory; // This selects the option matching the value
  });
});

*/
document.addEventListener("DOMContentLoaded", () => {
  
displayProduct();
displayProductInHome();
});