// Creating All types of Function

// function Declartion
function greet() {
    console.log("Namaste Duniya!");
}
greet();

// function Expression
const var_expression = function myFunction() {
    return `Hello Shivam.How Are You.`;
}
console.log(var_expression());

// Arrow Function
const greetAuthor = () => {
    return `Hello Author Mr. Shivam.`;
}
console.log(greetAuthor());

// IIFE
(function () {
    console.log(`Hello Shivam The Author.`);
})();
// 