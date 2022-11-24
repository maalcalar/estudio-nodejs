# Mixins 🤓

Briefly a mixin is building up a new class reusing another, you want to do this for whatever reason you have and you will do it by extending a class.

If you want a general approach about mixins in typescript you can go [here](https://www.typescriptlang.org/docs/handbook/mixins.html).

In this topic we are going to talk about general and constrained mixins.

## General

As you can imagine by the previous spoiler a general mixin can build a new class from any class.

### Example

```typescript
// Create two classes that will have the mixins on top of
class Sprite {
  name = "";
  x = 0;
  y = 0;
  _scale = 1;

  constructor(name: string) {
    this.name = name;
  }

  setScale(scale: number) {
    this._scale = scale;
  }

  get scale(): number {
    return this._scale;
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
console.log(testSquare.sides);

// Build a new class using the same mixin but a class that has nothing to do with
const RegularSquareCar = SquareSpriteMaker(Car);
const testSquareCar = new RegularSquareCar("Some Regular Square Car");
console.log(testSquareCar.name);
console.log(testSquareCar.sides);
```

## Constrained

This type of mixins can create new classes from classes that meet the requirements.

### Example

```typescript
// Create superclasses
class Point {
  x = 0;
  y = 0;

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Animal {
  species = "";

  constructor(species: string) {
    this.species = species;
  }
}

// Create type that defines a constraint on the class applied
type GConstructor<T = {}> = new (...args: any[]) => T;

type Movable = GConstructor<{ setPos:(x: number, y:number) => void }>;
type Nameable = GConstructor<Point>

// Define Mixins
function MakeMovablePoint<TBase extends Movable>(Base: TBase) {
  return class MovablePoint extends Base {
    _movementLog = [];

    moveTo(x: number, y: number) {
      this.setPos(x, y);
      this._movementLog.push({
        x,
        y
      });
    }

    printMovementVectorResult() {
      let log = "";

      for (const step of this._movementLog) {
        log += `Moved ${step.x} step(s) in X axis and ${step.y} step(s) in Y axis\n`;
      }

      console.log(log);
    }
  }
}

function MakeNameablePoint<TBase extends Nameable>(Base: TBase) {
  return class NameablePoint extends Base {
    _name = "";

    setName(name: string) {
      this._name = name;
    }

    get name(): string {
      return this._name;
    }
  }
}

// Apply Mixins
const MovablePointMaker = MakeMovablePoint(Point);
const PointA = new MovablePointMaker();
PointA.moveTo(3, 6);
PointA.moveTo(-4, 2);
PointA.printMovementVectorResult();

const NameableMovableMaker = MakeNameablePoint(MovablePointMaker); // Question 1

const NameablePointMaker = MakeNameablePoint(Point);
const MovableNameablePointMaker = MakeMovablePoint(NameablePointMaker);
const PointB = new MovableNameablePointMaker();
PointB.setName("Point B")
console.log(PointB.name);
PointB.moveTo(1, 2);
PointB.moveTo(-2, 1);
PointB.printMovementVectorResult();

const NameableAnimalMaker = MakeNameablePoint(Animal); // This is not possible
```

### Q&A

- Why is this possible since MakeNameablePoint is using Nameable type that only takes a Point class?
Because it only evaluate if the superclass contains the properties and method that a Point class contains. So if we add the same properties and methods to that Animal class it'll work too.

```typescript
// Replace
class Animal {
  species = "";
  x = 0;
  y = 0;

  constructor(species: string) {
    this.species = species;
  }

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const NameableAnimalMaker = MakeNameablePoint(Animal);
```