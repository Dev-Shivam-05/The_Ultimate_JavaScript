/*
5 4 3 2 1
5 4 3 2 
5 4 3
5 4 
5 
*/

let pattern_elements = "",i = 1 , j = 1;

while (i <= 5) {
    pattern_elements = "";
    j = 1;
    while (j <= 6-i) {
        pattern_elements += 6-j + " ";
        j++;
    }    
    console.log(pattern_elements);
    i++;
}