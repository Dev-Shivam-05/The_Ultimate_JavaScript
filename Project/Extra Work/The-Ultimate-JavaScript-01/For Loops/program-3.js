/* 
5				
4 5			
3 4 5		
2 3 4 5	
1 2 3 4 5
*/
let pattern_elements = "";
for (let i = 1; i <= 5; i++) {
  pattern_elements = "";
  for (let j = 1; j <= i; j++) {
    pattern_elements += 6-(i + 1 - j) + " ";
  }
  console.log(pattern_elements);
}