// Generate Fibonacci series up to 50.

let fibonacci_range = 50,
  fibonacci_numbers = ``,
  start_num = 0,
  last_num = 1,
  c;

do {
  fibonacci_numbers += `${start_num} `;
  c = start_num + last_num;
    start_num = last_num;
    last_num = c;
} while (last_num <= fibonacci_range);

console.log(`Fibonacci Series From 0 To ${fibonacci_range} Is :- ${fibonacci_numbers}.`);
