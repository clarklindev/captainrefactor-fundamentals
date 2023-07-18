//Template Method design pattern is a behavioral design pattern that defines the skeleton of an algorithm in a base class but allows derived classes to override certain steps of the algorithm without changing its overall structure. It promotes code reuse and provides a way to define a common algorithm while allowing variations in certain steps.

// Abstract class with template method
abstract class AbstractClass {
  // Template method
  public templateMethod(): void {
    this.step1();
    this.step2();
    this.step3();
  }

  protected abstract step1(): void;
  protected abstract step2(): void;
  protected abstract step3(): void;
}

// Concrete implementation 1
class ConcreteClass1 extends AbstractClass {
  protected step1(): void {
    console.log('ConcreteClass1: Step 1');
  }

  protected step2(): void {
    console.log('ConcreteClass1: Step 2');
  }

  protected step3(): void {
    console.log('ConcreteClass1: Step 3');
  }
}

// Concrete implementation 2
class ConcreteClass2 extends AbstractClass {
  protected step1(): void {
    console.log('ConcreteClass2: Step 1');
  }

  protected step2(): void {
    console.log('ConcreteClass2: Step 2');
  }

  protected step3(): void {
    console.log('ConcreteClass2: Step 3');
  }
}

// Client code
const concreteClass1: AbstractClass = new ConcreteClass1();
concreteClass1.templateMethod();

const concreteClass2: AbstractClass = new ConcreteClass2();
concreteClass2.templateMethod();
