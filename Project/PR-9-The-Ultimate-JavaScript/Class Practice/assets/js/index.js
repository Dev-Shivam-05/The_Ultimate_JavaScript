import header from "../utilities/nav";
header
let productTbl = document.querySelector(".product-data #view-card");
let products = JSON.parse(localStorage.getItem("products")) || [];

const displayProduct = () => {
  productTbl.innerHTML = "";
  products.forEach((product, index) => {
    const {image,pname,price,description} = product;

    let col = document.createElement("div");
    col.classList.add('col-md-3');
    col.innerHTML = `
        <div class="card">
            <img src="${image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${pname}</h5>
              <h6 class="card-subtitle">${price}</h6>
              <p class="card-text">
                ${description}
              </p>
              <a href="#" class="btn btn-primary">Add To Card</a>
            </div>
          </div>
    `;

    productTbl.appendChild(col);
  });
};

displayProduct();