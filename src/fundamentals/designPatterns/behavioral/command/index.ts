//Command design pattern is a behavioral design pattern that encapsulates a request as an object, thereby allowing you to parameterize clients with different requests, queue or log requests, and support undoable operations. The Command pattern separates the requester of the action (client) from the object that performs the action (receiver) and provides a way to decouple the two.

// Receiver
class Receiver {
  public executeAction(): void {
    console.log('Receiver: Executing action.');
  }
}

// Command interface
interface Command {
  execute(): void;
}

// Concrete command
class ConcreteCommand implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    console.log('ConcreteCommand: Calling receiver to execute action.');
    this.receiver.executeAction();
  }
}

// Invoker
class Invoker {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    console.log('Invoker: Executing command.');
    this.command.execute();
  }
}

// Client code
const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker();

invoker.setCommand(command);
invoker.executeCommand();
