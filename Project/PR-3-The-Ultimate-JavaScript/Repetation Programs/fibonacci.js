let fibonacci = 50,start_num = 0,last_num = 1,c;
let fibonacci_statement = `Fibonacci Series Till ${fibonacci} Is :- `;
for (let i = 0; last_num <= fibonacci; i++) {
    fibonacci_statement += `${start_num} `;
    c = start_num + last_num;
    start_num = last_num;
    last_num = c;
}

console.log(fibonacci_statement);