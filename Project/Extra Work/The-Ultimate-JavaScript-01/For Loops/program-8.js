/*
*	*	*	*	*	*	*	*	*	*
	*	*	*	*	*	*	*	*	
		*	*	*	*	*	*		
			*	*	*				
				*					
*/

let pattern_elements = "";

for (let i = 1; i <= 5; i++) {
    pattern_elements = "";
    for (let k = 1; k <= i; k++) {
        pattern_elements += "  "
    }
    for (let j = i; j <= 10 - i; j++) {
        pattern_elements += "* ";
    }
    console.log(pattern_elements);
}