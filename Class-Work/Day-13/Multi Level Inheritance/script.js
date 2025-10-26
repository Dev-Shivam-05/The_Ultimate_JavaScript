class Animal {
    constructor(name,color,age) {
        this.animal_name = name;
        this.animal_color = color;
        this.animal_age = age;
        // this.animal_sound = sound;
    }

    getAnimal(){
        return `${this.animal_name} Is Animal`;
    }
    
    // soundAnimal(){
    //     return `${this.animal_sound}`;
    // }
}

class Monkey extends Animal {
    constructor(name,color,age) {
        super(name,color,age);
    }

    danceAnimal() {
        return `${this.animal_name} is Dancing.....`;
    }
}

class Dog extends Animal {
    constructor(name,color,age) {
        super(name,color,age);
    }

    soundAnimal() {
        return `${this.animal_name} is Barking..Bow Bow....`;
    }
}

let obj_dog = new Dog("Dog","Brown",12); 
let obj_monkey = new Monkey("monkey","Brown",14);

console.log(obj_dog.soundAnimal());
console.log(obj_monkey.danceAnimal());