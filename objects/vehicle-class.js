'use strict';
// Vehicles
class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'it can drive';
  }
  stop(){
    return 'it can stop';
  }
}

class Car extends Vehicle{
  constructor(name){
    super(name, 4);
  }
}

class Motorcycle extends Vehicle{
  constructor(name){
    super(name, 2);
  }

  wheelie(){
    return 'can do a wheelie';
  }
}

// Flying Vehicle
class flyingVehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  fly(){
    return 'can fly';
  }
}
class Airplane extends flyingVehicle{
  constructor(name){
    super(name, 2);
  }
}
class Helicopter extends flyingVehicle{
  constructor(name){
    super(name, 0);
  }
}
// SeaCreature
class SeaCreature {
  constructor(name, legs){
    this.name = name;
    this.legs = legs;
  }
  swim(){
    return 'can swim';
  }
}
class Fish extends SeaCreature{
  constructor(name){
    super(name, 0);
  }
}
class Lobster extends SeaCreature{
  constructor(name){
    super(name, 8);
  }
}


module.exports = {Car, Motorcycle, Airplane, Helicopter, Lobster, Fish };

