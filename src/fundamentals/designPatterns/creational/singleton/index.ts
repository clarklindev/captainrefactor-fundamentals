class Car {
  
  private static _instance:Car | undefined;
  
  private constructor(){

  }

  static getInstance():Car{
    if(Car._instance === undefined){
      Car._instance = new Car();
    }
    return Car._instance;
  }
}

const car = Car.getInstance();

