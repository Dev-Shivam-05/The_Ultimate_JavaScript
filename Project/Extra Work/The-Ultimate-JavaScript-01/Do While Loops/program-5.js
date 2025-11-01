let pattern_elements = "", i = 1;

do {
    pattern_elements = "";
    let j = i;
    do {
        pattern_elements += `${6-j} `;
        j++;
    } while (j <= 5);
    console.log(pattern_elements);
    i++;
} while (i <= 5);