/* 
				1				
			1	2	1			
		1	2	3	2	1		
	1	2	3	4	3	2	1	
1	2	3	4	5	4	3	2	1
*/

let pattern_elements = "";
for (let i = 1; i <= 5; i++) {
  pattern_elements = "";
  for (let k = 5 - i; k >= 1; k--) {
    pattern_elements += "  ";
  }
  for (let j = 1; j <= i; j++) {
    pattern_elements += j + " ";
  }
  for (let j = 1; j < i; j++) {
    pattern_elements += j + " ";
  }
  console.log(pattern_elements);
}
