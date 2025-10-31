/*
        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5
*/

let pattern_elements = "",i = 1;

while (i <= 5) {
    pattern_elements = "";
    let k = 5-i;
    while (k >= 1) {
        pattern_elements += "  ";
        k--;
    }
    let j = 1;
    while (j <= i) {
        pattern_elements += j + " ";
        j++;
    }
    console.log(pattern_elements);
    
    i++;
}