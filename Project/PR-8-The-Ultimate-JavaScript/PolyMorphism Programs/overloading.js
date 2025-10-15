class Parent {
  printMessage() {
    console.log("Hello from Parent.");
  }
}

class ChildA extends Parent {
  printMessage() {
    super.printMessage();
    console.log("Hello from Child A.");
  }
}

class ChildB extends Parent {
  printMessage() {
    super.printMessage();
    console.log("Hello From Child B.");
  }
}

let child_a_obj = new ChildA();
child_a_obj.printMessage();

let child_b_obj = new ChildB();
child_b_obj.printMessage();