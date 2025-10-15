class Student {
  constructor(name, std, maths, science, hindi, social_science, english) {
    this.std_name = name;
    this.std_class = std;
    this.std_maths_marks = maths;
    this.std_science_marks = science;
    this.std_hindi_marks = hindi;
    this.std_social_science_marks = social_science;
    this.std_english_marks = english;
    this.total_marks = 500;

    this.scored_marks = this.calculateScoredMarks();
    this.percentage = this.calculatePercentage();

    this.grade = this.calculateGrade();
    this.remark = this.getRemark();
  }

  calculateScoredMarks() {
    return (
      this.std_maths_marks +
      this.std_science_marks +
      this.std_hindi_marks +
      this.std_social_science_marks +
      this.std_english_marks
    );
  }

  calculatePercentage() {
    return this.scored_marks / (this.total_marks / 100);
  }

  calculateGrade() {
    if (this.percentage > 80) {
      return "A";
    } else if (this.percentage > 60) {
      return "B";
    } else if (this.percentage > 45) {
      return "C";
    } else if (this.percentage > 35) {
      return "D";
    } else {
      return "E";
    }
  }

  getRemark() {
    switch (this.grade) {
      case "A":
        return "Outstanding performance! Keep pushing boundaries and aiming higher.";
      case "B":
        return "Good work, but there is room for further improvement. You can do even better!";
      case "C":
        return "Decent progress, but more effort is needed to reach your full potential.";
      case "D":
        return "You need to focus more on your studies. Stay consistent and try to engage better.";
      case "E":
        return "Unfortunately, you did not meet the requirements for promotion. Consider more dedication next time.";
      default:
        return "Keep up the good work and aim to improve!";
    }
  }

  getProgressReport() {
    return `
         **Student Progress Report** 

        **Name**: ${this.std_name}  
        **Class**: ${this.std_class}  
        **Total Marks**: ${this.total_marks}  
        **Scored Marks**: ${this.scored_marks}  
        **Percentage**: ${this.percentage.toFixed(2)}%

        **Grade**: ${this.grade}  
        **Remark**: ${this.remark}

        **Note**: Keep up the effort and continue striving for excellence. If you encounter challenges, don't hesitate to seek guidance. We believe in your potential to succeed!
        `;
  }
}

let std_obj = new Student("Shivam Bhadoriya", 12, 76, 83, 92, 91, 67);
console.log(std_obj.getProgressReport());