class A {
    constructor() {
        console.log("hello From Class A");
    }
};

class B extends A{
    constructor() {
        super();
        console.log("hello From Class B");
    }
};

let obj_b = new B();