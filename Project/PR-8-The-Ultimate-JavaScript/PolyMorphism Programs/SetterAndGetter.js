class Person {
    constructor() {
        this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }
}

let person_obj = new Person();
person_obj.name = "Shivam Bhadoriya";
console.log(`Your Name Is :- ${person_obj.name}`);