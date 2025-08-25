let percentage = 89;
let grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 35) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`According To ${percentage}% You have Achived ${grade} Grade.`);