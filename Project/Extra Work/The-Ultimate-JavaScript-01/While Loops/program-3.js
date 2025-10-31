/*
5
4 5
3 4 5
2 3 4 5
1 2 3 4 5
*/

let pattern_elements = "",i = 1 , j = 1;

while (i <= 5) {
    pattern_elements = "";
    j = 1;
    while (j <= i) {
        pattern_elements += 6-(i-j+1) + " ";
        j++;
    }    
    console.log(pattern_elements);
    i++;
}