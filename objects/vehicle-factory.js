'use strict';

// Vehicle
const Vehicle = () => ({
  drive(){
    return 'it can drive';
  },
  stop(){
    return 'it can stop';
  },
});

function Car(name){
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  );
  return car;
}

function Motorcycle(name){
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Vehicle() 
  );
  function wheelie(){return 'can';}
  return motorcycle;
}

// Flying Vehicle
const FlyingVehicle = () => ({
  fly(){
    return 'can fly';
  },
});

function Airplane(name){
  let airplane = Object.assign(
    {},
    {name},
    {wheels: 2},
    FlyingVehicle()
  );
  return airplane;
}
function Helicopter(name){
  let helicopter = Object.assign(
    {},
    {name},
    {wheels: 0},
    FlyingVehicle()
  );
  return helicopter;
}

// SeaCreatures
const SeaCreature = () =>({
  swim(){
    return 'can swim';
  },
});

function Fish(name){
  let fish = Object.assign(
    {},
    {name},
    {legs: 0},
    SeaCreature()
  );
  return fish;
}
function Lobster(name){
  let lobster = Object.assign(
    {},
    {name},
    {legs: 8},
    SeaCreature()
  );
  return lobster;
}

module.exports = { Car, Motorcycle, Airplane, Helicopter, Fish, Lobster };


