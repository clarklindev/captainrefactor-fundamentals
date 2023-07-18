// the Proxy design pattern is a structural design pattern that provides a surrogate or placeholder for another object. It allows you to control the access to the underlying object and add additional behavior without modifying its code. The Proxy pattern is often used to implement lazy loading, access control, caching, logging, or remote communication.

// Subject interface
interface Subject {
  request(): void;
}

// Real subject
class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: Handling request.');
  }
}

// Proxy
class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor() {
    this.realSubject = new RealSubject();
  }

  request(): void {
    // Perform additional actions before or after delegating to the real subject
    console.log('Proxy: Logging before request.');
    this.realSubject.request();
    console.log('Proxy: Logging after request.');
  }
}

// Client code
const proxy: Subject = new Proxy();
proxy.request();
