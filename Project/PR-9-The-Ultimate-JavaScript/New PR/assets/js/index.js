import header from "../utilities/nav";

// const product_form = document.getElementById('product-detail');
// const inputs = document.querySelectorAll('#product-detail .input-tag input')
// let products = [];
// let product_obj = {};

// inputs.forEach((input)=>{
//     input.addEventListener('input',(e)=>{
//         let {name,value} = e.target;
//         product_obj = {...product_obj,[name]:value};
//     })
// })

// product_form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     products.push({...product_obj,id:Date.now()});
//     localStorage.setItem('product',JSON.stringify(products));
//     product_form.reset();
// });


const productContainerRow = document.querySelector('#productsContainer #view-card');

// let productTbl = document.querySelector(".product-data #view-card");
let products = JSON.parse(localStorage.getItem("products")) || [];

if (products === null) {
    let pMessage = document.getElementById('noProductsMessage');
    pMessage.classList.add('d-none');
}

const displayProduct = () => {
  productContainerRow.innerHTML = "";
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