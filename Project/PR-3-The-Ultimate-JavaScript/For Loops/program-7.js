// Reverse a string (without using built-in reverse).

let str = "mavihS",new_str = "";
for (let i =  str.length - 1; i >= 0; i--) {
  new_str += str[i];
}
console.log(new_str);