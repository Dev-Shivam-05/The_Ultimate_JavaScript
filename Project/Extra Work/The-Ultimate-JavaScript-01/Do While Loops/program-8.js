let pattern_elements = "" , i = 1;
do {
    pattern_elements = "";
    let k = 1;
    do {
        pattern_elements += '  ';
        k++;
    } while (k <= i);
    let j = i;
    do {
        pattern_elements += '* ';
        j++;
    } while (j <= 5 * 2 - i);
    console.log(`${pattern_elements}`);
    i++;
} while (i <= 5);