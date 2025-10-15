class Employee {
    constructor(name,dept,baseSalary,role = "employee") {
        this.emp_name = name;
        this.emp_dept = dept;
        this.emp_basic_salary = baseSalary;
        this.emp_role = role;
        this.emp_id = this.generateID(this.emp_name,this.emp_dept);
    }

    generateID(name,dept){
        let prefix = dept.slice(0,3).toUpperCase() + "-" + name.slice(0,3).toUpperCase();
        let random = Math.floor(Math.random() * 100);
        return `${prefix}-${random}`;
    }

    calculateSalary(){
        return this.emp_basic_salary;
    }

    getInfo(){
        return `${this.emp_name} Is ${this.emp_role} Of ${this.emp_dept} Department And his Employee Id is ${this.emp_id} and His Salary is ${this.emp_basic_salary}`;
    }
}

class Manager extends Employee{
    constructor(name,id,dept,baseSalary,teamSize,bonusPercentage) {
        super(name,dept,baseSalary,"Manager");
        this.teamSize = teamSize;
        this.bonusPercentage = bonusPercentage;
    }
    conductMeeting() {
        return `${this.emp_name} is Conducting A Meeting Of ${this.teamSize} Members`;
    }
}

class Developer extends Employee{
    constructor(name,id,dept,baseSalary,programmingLanguage,overTime = 0) {
        super(name,dept,baseSalary,"Developer");
        this.programmingLanguage = programmingLanguage;
        this.overTime = overTime;
    }
    code() {
        return `${this.emp_name} is Developing Some New Features With ${this.programmingLanguage} Programming Language.`;
    }
}

let emp_obj = new Employee("Shivam Bhadoriya","IT",300000,"HR");
console.log(emp_obj.calculateSalary());
console.log(emp_obj.getInfo());