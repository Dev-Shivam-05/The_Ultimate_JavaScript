/*
* * * * * * * * *
 * * * * * * *
   * * * * *
     * * *
       *
*/

let pattern_elements = "",i = 1;

while (i <= 5) {
    pattern_elements = "";
    let k = i;
    while (k >= i) {
        pattern_elements += " ";
        k--;
    }
    let j = i;
    while (j <= 10-i) {
        pattern_elements += "* ";
        j++;
    }
    console.log(pattern_elements);
    i++;
}