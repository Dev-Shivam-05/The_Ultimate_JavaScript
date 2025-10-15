class User {
    constructor(name,email, role = 'user') {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isActive = true;
        this.createdAt = new Date();
    }

    deactivate() {
        this.isActive = false;
        console.log(`${this.name} is successfully deactivated.`);
    }

    activate() {
        this.isActive = true;
        console.log(`${this.name} is successfully activated.`);
    }

    getInfo() {
        return `${this.name} is ${this.role} you can connect him through ${this.email} his current status is ${(this.isActive)?"Active":"Deactive"}`;
    }
}

let user_obj = new User("Shivam Bhadoriya", "shivambhadoriya1605@gmail.com", "Admin");

user_obj.activate();
user_obj.deactivate();
console.log(user_obj.getInfo());