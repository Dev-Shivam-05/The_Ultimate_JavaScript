let productTbl = document.querySelector("#ProductTBL tbody");
let products = JSON.parse(localStorage.getItem("products")) || [];

const DisplayProducts = () => {
  productTbl.innerHTML = "";
  products.forEach((product) => {
    const {
      product_Id,
      url,
      product_name,
      product_description,
      product_price,
    } = product;

    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${product_Id}</td>
            <td>${url}</td>
            <td>${product_name}</td>
            <td>${product_description}</td>
            <td>${product_price}</td>
            <td><button class="btn btn-danger mx-3" onclick="DeleteProduct(${product_Id})">Delete</button><button class="btn btn-warning" onclick="EditProduct(${product_Id})">Edit</button></td>
        `;
    productTbl.appendChild(row);
  });
};

DisplayProducts();

const DeleteProduct = (id) => {
  products = products.filter((val) => val.id != id);
  localStorage.setItem("products", JSON.stringify(products));
};

const EditProduct = (id) => {
  let data = products.find((val) => val.id == id);
  localStorage.setItem("products", JSON.stringify(data));
  window.location.href = "./editProduct.html";
};
