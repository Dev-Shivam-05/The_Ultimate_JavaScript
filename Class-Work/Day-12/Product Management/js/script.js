/*
    Design a class called Product that represents an item in an online store. This class should be able 
    to generate a unique SKU for each product based on its category and a random code. 
    It should allow you to update the stock by either adding or removing units,
    while ensuring that the stock never goes negative.
    The class should also support applying a discount to the product’s price, 
    and it should handle invalid inputs for the discount and stock operations. 
    Create an example where you initialize a product, update its stock, and apply a discount. Finally, 
    ensure that the system correctly displays the product’s SKU, updated stock, and new price after the discount.
*/

class Product {
    constructor(p_name,p_price,stock,category,quantity = 1) {
        this.product_name = p_name;
        this.product_price = p_price;
        this.stock = stock;
        this.product_category = category;
        this.quantity = quantity;
        this.SKU = this._generateSKU(this.product_category,this.product_name);
        this.total_amount = this.product_price * this.quantity;
        this.discount = this.applyDiscount();
    }

    _generateSKU(category,p_name){
        let prefix = category.slice(0,3).toUpperCase() + p_name.slice(0,3).toUpperCase();
        let random = Math.floor(Math.random() * 100);
        return `${prefix}-${random}`;
    }

    updateStocks(stock){
        if (quantity < 0) {
            console.log("Invalid Quantity. Quantity Must Be Greater Than 0.");
            return;
        }
        if (this.stock + this.quantity < 0) {
            console.log(`Stock updated: ${this.stock} units available.`);
            
        }
        this.quantity += quantity
    }

    applyDiscount(){
        if (this.total_amount > 2000) {
            this.discount = .05;
        } else if (this.total_amount > 5000) {
            this.discount = .08;
        } else if (this.total_amount > 10000) {
            this.discount = .12;
        } else if (this.total_amount > 20000) {
            this.discount = .16;
        } else if (this.total_amount > 30000) {
            this.discount = .24;
        } else if (this.total_amount > 50000) {
            this.discount = .30;
        }  else if (this.total_amount > 60000) {
            this.discount = .35;
        }
        return this.discount;
    }

    displayProductDetails(){
        console.log("======== Product ========"); console.log();
        console.log(`Product Name : ${this.product_name}`); console.log();
        console.log(`Product price : ${this.product_price}`); console.log();
        console.log(`Product category : ${this.product_category}`); console.log();
        console.log(`Product quantity : ${this.quantity}`); console.log();
        console.log(`Product SKU ID : ${this.SKU}`); console.log();
        console.log(`Discount Applied In Percentage: ${this.discount*100}%`); console.log();
        console.log(`Discount Applied In Amount: ${this.total_amount * this.discount}`); console.log();
        console.log(`Total Price : ${this.total_amount}`); console.log();
        console.log("======== Exit ========");
        
    }
}


let product_obj = new Product("Laptop",79000,1000,"Electronics",4);
product_obj.displayProductDetails();