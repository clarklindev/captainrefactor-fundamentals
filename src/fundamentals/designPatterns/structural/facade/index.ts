//In JavaScript, the Facade design pattern is a structural design pattern that provides a simplified interface to a complex system of objects, classes, or APIs. It allows you to hide the complexity of the underlying subsystems and present a unified interface to the client code.

//The Facade pattern typically consists of a single class that serves as a facade or an interface to the underlying subsystem. The client code interacts with the facade, which in turn delegates the requests to the appropriate objects within the subsystem.

// Subsystem 1
class Subsystem1 {
  operation1() {
    console.log('Subsystem 1: Operation 1');
  }

  operation2() {
    console.log('Subsystem 1: Operation 2');
  }
}

// Subsystem 2
class Subsystem2 {
  operation1() {
    console.log('Subsystem 2: Operation 1');
  }

  operation2() {
    console.log('Subsystem 2: Operation 2');
  }
}

// Facade
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation() {
    this.subsystem1.operation1();
    this.subsystem1.operation2();
    this.subsystem2.operation1();
    this.subsystem2.operation2();
  }
}

// Client code
const facade = new Facade();
facade.operation();
