let baseUrl = window.location.href;
let preFix = '';
if (baseUrl === "index") {
    preFix = './';
}

let nav = `    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="./index.html">Product Management</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html" data-page="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./assets/pages/add_products.html" data-page="add-product"
                >Add Product</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./assets/pages/view_products.html" data-page="view-product"
                >View Products</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./assets/pages/cart.html" data-page="view-product"
                >Cart</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;

const header = document.getElementById('header').innerHTML = `${nav}`;
export default header;