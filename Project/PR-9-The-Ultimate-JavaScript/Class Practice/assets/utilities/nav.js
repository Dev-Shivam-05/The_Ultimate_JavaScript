let base_URL = window.location.href;
let preFix = "";
if (base_URL.includes("index")) {
  preFix = "./assets/pages/";
}

let nav = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="${preFix}index.html">JS</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="${preFix}index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${preFix}add_products.html">Add Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${preFix}view_products.html"
                  >View Products</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
`;

const header = document.getElementsByTagName("header").innerHTML = `${nav}`;

export default header;
