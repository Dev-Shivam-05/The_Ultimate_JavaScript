// Creating All types of Function

// function Declartion
function greet() {
    console.log("Namaste Duniya!");
}
greet();

// function Expression
const var_expression = function myFunction(name) {
    return `Hello ${name}.How Are You.`;
}
console.log(var_expression("Shivam"));

// Arrow Function
const greetAuthor = (auth_name) => {
    return `Hello Author Mr. ${auth_name}.`;
}
console.log(greetAuthor("Shivam"));

// IIFE
(function (auth_name) {
    console.log(`Hello ${auth_name} The Author.`);
})("Shivam");