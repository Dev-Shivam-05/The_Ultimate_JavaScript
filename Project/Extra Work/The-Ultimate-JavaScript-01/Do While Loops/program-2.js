let pattern_elements = "", i = 1;

do {
    pattern_elements = "";
    let j = 1;
    do {
        pattern_elements += `${i-j+1} `;
        j++;
    } while (j <= i);
    console.log(pattern_elements);
    
    i++;
} while (i <= 5);