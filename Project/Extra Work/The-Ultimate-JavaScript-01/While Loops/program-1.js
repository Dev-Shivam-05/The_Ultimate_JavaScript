/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let pattern_elements = "",i = 1,j = 1;

while (i <= 5) {
    while (j <= i) {
        pattern_elements += j + " ";
        j++;
    }
    console.log(pattern_elements);
    
    i++;
}