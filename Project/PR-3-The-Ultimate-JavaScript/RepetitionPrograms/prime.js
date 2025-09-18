let num = 17,isPrime = true;

for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
        isPrime = false;
    }
}

if (isPrime) {
    console.log(`Number ${num} Is An Prime Number.`);
    
} else {
    console.log(`Number ${num} Is Not An Prime Number.`);
}