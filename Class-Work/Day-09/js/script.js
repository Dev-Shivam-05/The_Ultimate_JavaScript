const productForm = document.getElementById('productForm');
let product_name = document.getElementById('productName');
let product_price = document.getElementById('productPrice');
let products = new Array();

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let product_obj = {
        p_name : product_name.value,
        p_price : product_price.value,
    }
    products.push(product_obj);

    product_name.value = '';
    product_price.value = '';
    // productForm.value.reset();
    console.log(products);
});

