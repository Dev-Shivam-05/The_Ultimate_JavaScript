let pattern_elements = "",i = 1;

do {
    pattern_elements = "";
    let k = 6 - i;
    do {
        pattern_elements += "  ";
        k--;
    } while (k >= 1);
    let j = 1;
    do {
        pattern_elements += `${j} `;
        j++;
    } while (j <= i);
    j = 1;
    do {
        pattern_elements += `${i-j} `;
        j++;
    } while (j < i);
    console.log(pattern_elements);
    i++;
} while (i <= 5);