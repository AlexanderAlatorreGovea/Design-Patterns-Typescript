// Decorator Concept Sample Code

interface IComponent {
  method(): string;
}

class Component implements IComponent {
  method(): string {
    return "Component Method";
  }
}

class Decorator implements IComponent {
  #object: IComponent;

  constructor(object: IComponent) {
    this.#object = object;
  }

  method() {
    return `Decorator Method(${this.#object.method()})`;
  }

  newMessage() {
    return `The Decorator is adding extra functionality to the ${this.#object.method()} 
     by taking it as an argument
    `;
  }
}

// The Client
const COMPONENT = new Component();
//console.log(COMPONENT.method());

// The component can be decorated
const Decorated = new Decorator(COMPONENT);
//console.log(Decorated.method());
console.log(Decorated.newMessage());

// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated);
//console.log(Decorated2.method());
