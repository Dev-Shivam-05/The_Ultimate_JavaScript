/* 
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
*/

let pattern_elements = "",i,j;
for (i = 1; i <= 5; i++) {
  pattern_elements = "";
  for (j = 1; j <= i; j++) {
    pattern_elements += (i + 1 - j) + " ";
  }
  console.log(pattern_elements);
}
