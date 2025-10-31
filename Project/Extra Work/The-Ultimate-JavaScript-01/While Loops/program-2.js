/*
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
*/

let pattern_elements = "",i = 1 , j = 1;

while (i <= 5) {
    pattern_elements = "";
    j = 1;
    while (j <= i) {
        pattern_elements += (i-j+1) + " ";
        j++;
    }    
    console.log(pattern_elements);
    i++;
}