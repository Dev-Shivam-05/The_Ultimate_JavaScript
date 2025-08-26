let investing_amount = 100000;
let time = 10;

let rate_of_interest = 8;

let interest = (investing_amount * time * rate_of_interest) / 100,
  mature_amount = investing_amount + interest;

console.log(`Investing Amount Is :- ${investing_amount}`);
console.log(`Time of Intrest Is :- ${time}`);
console.log(`Rate Of Interest Per Year :- ${rate_of_interest}`);
console.log(`Total Intrest For ${time} Year Is :- ${interest}`);
console.log(`Discount Applied Is :- ${discount}`);
console.log(`Mature Amount Will Be :- ${mature_amount}`);