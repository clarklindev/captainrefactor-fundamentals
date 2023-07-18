class Car{
}

class Bike{
}

class TransportFactory{
  make(type:string){
    switch(type){
      case "car":
        return new Car();
      case "bike":
        return new Bike();
    }
  }
}

const factory = new TransportFactory();
factory.make("car");