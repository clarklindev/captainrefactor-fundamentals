//Strategy design pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one as a separate class, and make them interchangeable. The Strategy pattern enables the client code to vary the algorithm or strategy at runtime without tightly coupling it to a specific implementation.

// Strategy interface
interface Strategy {
  executeAlgorithm(data: string[]): void;
}

// Concrete strategy 1
class ConcreteStrategy1 implements Strategy {
  executeAlgorithm(data: string[]): void {
    console.log('Executing algorithm using ConcreteStrategy1:', data.reverse());
  }
}

// Concrete strategy 2
class ConcreteStrategy2 implements Strategy {
  executeAlgorithm(data: string[]): void {
    console.log('Executing algorithm using ConcreteStrategy2:', data.sort());
  }
}

// Context class
class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(data: string[]): void {
    this.strategy.executeAlgorithm(data);
  }
}

// Client code
const context = new Context();

const strategy1 = new ConcreteStrategy1();
context.setStrategy(strategy1);

const data1 = ['apple', 'banana', 'cherry'];
context.executeStrategy(data1);

const strategy2 = new ConcreteStrategy2();
context.setStrategy(strategy2);

const data2 = ['zebra', 'elephant', 'tiger'];
context.executeStrategy(data2);
