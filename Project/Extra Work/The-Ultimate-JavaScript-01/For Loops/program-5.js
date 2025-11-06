/* 
5				
5 4			
5 4 3		
5 4 3 2	
5 4 3 2 1
*/
let pattern_elements = "";
for (let i = 1; i <= 5; i++) {
  pattern_elements = "";
  for (let j = 1; j <= 6-i; j++) {
    pattern_elements += (6-j) + " ";
  }
  console.log(pattern_elements);
}