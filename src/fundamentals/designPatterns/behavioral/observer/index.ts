//Observer design pattern is a behavioral design pattern that establishes a one-to-many dependency between objects, so that when one object (subject) changes its state, all its dependent objects (observers) are automatically notified and updated. The Observer pattern allows for loose coupling between objects, promoting maintainability and flexibility.

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  getState(): number {
    return this.state;
  }

  setState(state: number): void {
    this.state = state;
    this.notify();
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

// Observer interface
interface Observer {
  update(): void;
}

// Concrete observer A
class ConcreteObserverA implements Observer {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update(): void {
    const state = this.subject.getState();
    console.log(`ConcreteObserverA: Received update with state ${state}`);
  }
}

// Concrete observer B
class ConcreteObserverB implements Observer {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.attach(this);
  }

  update(): void {
    const state = this.subject.getState();
    console.log(`ConcreteObserverB: Received update with state ${state}`);
  }
}

// Client code
const subject = new ConcreteSubject();
const observerA = new ConcreteObserverA(subject);
const observerB = new ConcreteObserverB(subject);

subject.setState(1);
subject.setState(2);

subject.detach(observerA);

subject.setState(3);
