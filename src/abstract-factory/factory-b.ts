// FactoryBSample Code

export interface IProductB {
  name: string;
}

class ConcreteProduct implements IProductB {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductC";
  }
}

export class FactoryB {
  static getObject(some_property: string): IProductB {
    try {
      switch (some_property) {
        case "a":
          return new ConcreteProductA();
        case "b":
          return new ConcreteProductB();
        case "c":
          return new ConcreteProductC();
        default:
          throw new Error("Class Not Found");
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProduct();
  }
}
