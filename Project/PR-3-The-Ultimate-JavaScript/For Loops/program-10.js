// Count vowels in a string.

let str = "Shivam",count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
        count++;
    }
}

console.log(`In The String ${str} There Are Total ${count} Vowels.`);
