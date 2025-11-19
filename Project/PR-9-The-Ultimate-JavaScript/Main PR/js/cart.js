// Sample data to pre-populate the cart
const initialProducts = [
  {
    productID: 1,
    productName: "Wireless Mouse",
    productDescription: "Ergonomic wireless mouse with long battery life.",
    productCategory: "Electronics",
    productImage: "https://via.placeholder.com/400x300/indigo/fff?text=Mouse",
    productPrice: "25.50",
    productQty: 1,
  },
  {
    productID: 2,
    productName: "Mechanical Keyboard",
    productDescription: "RGB backlit mechanical keyboard for gaming.",
    productCategory: "Electronics",
    productImage: "https://via.placeholder.com/400x300/blue/fff?text=Keyboard",
    productPrice: "89.99",
    productQty: 1,
  },
  {
    productID: 3,
    productName: "USB-C Hub",
    productDescription: "7-in-1 USB-C hub with HDMI, SD card reader, and more.",
    productCategory: "Accessories",
    productImage: "https://via.placeholder.com/400x300/green/fff?text=Hub",
    productPrice: "45.00",
    productQty: 2,
  },
];

let cartProducts =
  JSON.parse(localStorage.getItem("cartProducts")) || initialProducts;

// Render cart items
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartFooter = document.getElementById("cart-footer");

  cartContainer.innerHTML = ""; // Clear existing items before rendering

  if (cartProducts.length === 0) {
    emptyCart.style.display = "block";
    cartFooter.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    cartFooter.style.display = "block";
    
    cartProducts.forEach((cartProduct) => {
      let {
        productName,
        productPrice,
        productImage,
        productQty,
        productCategory,
        productID,
        productDescription,
      } = cartProduct;

      let cart_item = document.createElement("div");
      cart_item.classList.add("cart-item");

      cart_item.innerHTML = `
        <div class="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl" id="${productID}">
            <div class="p-5">
                <img src="${productImage}" alt="${productName}" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-slate-800">${productName}</h3>
                <p class="text-slate-500 text-sm mt-1 mb-3">${productDescription}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-bold text-indigo-600">$${parseFloat(
                      productPrice
                    ).toFixed(2)}</span>
                    <span class="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                        ${productCategory}
                    </span>
                </div>
                <div class="flex items-center gap-3 my-4">
                    <button class="w-9 h-9 rounded-md border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition-all" onclick="decQuantity(this,-1)" data-product-id="${productID}">
                        <i class="bi bi-dash"></i>
                    </button>
                    <span class="text-lg font-semibold w-10 text-center">${productQty}</span>
                    <button class="w-9 h-9 rounded-md border-2 border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition-all" onclick="incQuantity(this,1)" data-product-id="${productID}">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
                <button class="w-full bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all" onclick="removeProduct(this)" data-product-id="${productID}">
                    <i class="bi bi-trash me-2"></i> Remove from Cart
                </button>
            </div>
        </div>
      `;

      cartContainer.appendChild(cart_item);
    });
  }

  updateTotal();
}

// Update product quantity
function decQuantity(element,change) {
  let id = element.getAttribute("data-product-id"); // Corrected here

  const product = cartProducts.find(
    (cartProduct) => cartProduct.productID === id
  );

  if (product) {
    product.productQty += change;
    if (product.productQty < 1) {
      product.productQty = 1; // Prevent quantity from going below 1
    }
    saveCartToLocalStorage();
    renderCart();
  }
}

// Update product quantity
function incQuantity(element,change) {
  let id = element.getAttribute("data-product-id"); // Corrected here
  console.log(id);
  
  const product = cartProducts.find(
    (cartProduct) => cartProduct.productID === id
  );

  if (product) {
    product.productQty += change;
    if (product.productQty < 1) {
      product.productQty = 1; // Prevent quantity from going below 1
    }
    saveCartToLocalStorage();
    renderCart();
  }
}

// Remove product with animation
function removeProduct(element) {
  let id = element.getAttribute("data-product-id"); // Corrected here
  console.log(id);
  
  const productElement = document.getElementById(`${id}`);
  console.log(productElement);
  
  if (productElement) {
    productElement.classList.add("removing");

    setTimeout(() => {
      cartProducts = cartProducts.filter((p) => p.productID !== id);
      saveCartToLocalStorage();
      renderCart();
    }, 500); // Match animation duration
  }
}

// Update total price
function updateTotal() {
  const total = cartProducts.reduce((sum, product) => {
    return sum + parseFloat(product.productPrice) * product.productQty;
  }, 0);
  document.getElementById("total-price").textContent = total.toFixed(2);
}

// Proceed to checkout
function proceedToCheckout() {
  if (cartProducts.length === 0) {
    alert("Your cart is empty! Please add items before checkout.");
    return;
  }

  // Trigger confetti
  confetti({
    particleCount: 150,
    spread: 180,
    origin: { y: 0.6 },
  });

  const total = cartProducts.reduce((sum, product) => {
    return sum + parseFloat(product.productPrice) * product.productQty;
  }, 0);

  const summary = cartProducts
    .map((p) => `${p.productName} (x${p.productQty})`)
    .join("\n");

  alert(`
    🛒 Order Summary:
    
    ${summary}
    
    Total: $${total.toFixed(2)}
    
    Redirecting to payment gateway...
  `);
}

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", function () {
  renderCart();
});
