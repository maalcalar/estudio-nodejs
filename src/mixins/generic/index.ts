// Create two classes that will have the mixins on top of
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

class Car {
  brand = "";

  constructor(brand: string) {
    this.brand = brand;
  }
}

// A type to extend other classes from. The type declares a class.
type Constructor = new (...args: any[]) => {};

// Mixin
function SquareSpriteMaker<TBase extends Constructor>(Base: TBase) {
  return class Square extends Base {
    _sides = 4;

    get sides(): number {
      return this._sides;
    }
  }
}

// Build a new class from the Sprite class with the Mixin applier:
const RegularSquare = SquareSpriteMaker(Sprite);
const testSquare = new RegularSquare("Regular Test Square");
console.log(testSquare.name);
console.log(testSquare.sides + "\n");

// Build a new class using the same mixin but a class that has nothing to do with
const RegularSquareCar = SquareSpriteMaker(Car);
const testSquareCar = new RegularSquareCar("Some Regular Square Car");
console.log(testSquareCar["name"]);
console.log(testSquareCar.sides);