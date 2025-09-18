let range = 100,
  prime_numbers = "",
  num = 2;

for (let i = 2; i <= range; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
      prime_numbers += `${i} `;
  }
}

console.log(`Prime Number Between 0 to ${range} Are :- ${prime_numbers}.`);
