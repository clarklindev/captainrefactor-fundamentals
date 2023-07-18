//the Decorator pattern is a structural design pattern that allows you to dynamically add behavior or functionality to an object at runtime. It provides an alternative to subclassing for extending the functionality of an object without modifying its structure.

//To implement the Decorator pattern in TypeScript, you can use a combination of classes and interfaces. Here's an example:

// Component interface
interface Component {
  operation(): void;
}

// Concrete component
class ConcreteComponent implements Component {
  operation(): void {
    console.log('Executing the operation of the concrete component.');
  }
}

// Decorator base class
abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): void {
    this.component.operation();
  }
}

// Concrete decorator A
class ConcreteDecoratorA extends Decorator {
  operation(): void {
    super.operation();
    this.additionalOperation();
  }

  additionalOperation(): void {
    console.log('Executing additional operation in ConcreteDecoratorA.');
  }
}

// Concrete decorator B
class ConcreteDecoratorB extends Decorator {
  operation(): void {
    super.operation();
    this.additionalOperation();
  }

  additionalOperation(): void {
    console.log('Executing additional operation in ConcreteDecoratorB.');
  }
}

// Client code
const component: Component = new ConcreteComponent();
const decoratedComponentA: Component = new ConcreteDecoratorA(component);
const decoratedComponentB: Component = new ConcreteDecoratorB(decoratedComponentA);

decoratedComponentB.operation();
