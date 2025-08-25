let total_amount, discount, nettotal_amount;

let product_name = "Laptop";
let product_price = 56999;
let product_quantity = 1;

total_amount = product_price * product_quantity;
discount = total_amount * 0.1;
nettotal_amount = total_amount - discount;

console.log(`Your Product Name Is :- ${product_name}`);
console.log(`Your Product Price Is :- ${product_price}`);
console.log(`Your Product Quantity Is :- ${product_quantity}`);
console.log(`Your Total Amount Is :- ${total_amount}`);
console.log(`Discount Applied Is :- ${discount}`);
console.log(`NetTotal Is :- ${nettotal_amount}`);