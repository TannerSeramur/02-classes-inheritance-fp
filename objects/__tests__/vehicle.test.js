'use strict';

const Vehicle = require('../vehicle-class.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

  describe('Airplane', () => {

    let airplane = new Vehicle.Airplane('foo');

    it('has 2 wheels', () => {
      expect(airplane.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(airplane.drive).toBeUndefined();
    });

    it('can fly', () => {
      expect(airplane.fly).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(airplane.wheelie).toBeUndefined();
    });

  });

  describe('Helicopter', () => {
    let helicopter = new Vehicle.Helicopter('foo');

    it('has 2 wheels', () => {
      expect(helicopter.wheels).toEqual(0);
    });

    it('can drive', () => {
      expect(helicopter.drive).toBeUndefined();
    });

    it('can fly', () => {
      expect(helicopter.fly).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(helicopter.wheelie).toBeUndefined();
    });

  });

});

describe('Sea Creatures', () => {
  describe('Fish', () => {
    let fish = new Vehicle.Fish('foo');

    it('has 0 legs', () => {
      expect(fish.legs).toEqual(0);
    });
    it('can swim', () => {
      expect(fish.swim).toBeTruthy();
    });
  });
  describe('Lobster', () => {
    let lobster = new Vehicle.Lobster('foo');

    it('has 8 legs', () => {
      expect(lobster.legs).toEqual(8);
    });
    it('can swim', () => {
      expect(lobster.swim).toBeTruthy();
    });
  });


});
